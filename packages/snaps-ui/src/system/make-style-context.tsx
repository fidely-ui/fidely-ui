import * as React from 'react'
import {
  styled,
  type StyledComponent,
  isCssProperty,
} from '@snaps-ui/styled-system/jsx'
import { cx } from '@snaps-ui/styled-system/css'

type GenericProps = Record<string, unknown>
type RecipeFn = {
  (props?: GenericProps): GenericProps
  splitVariantProps: (props: GenericProps) => [GenericProps, GenericProps]
}
type SlotKey<R extends RecipeFn> = keyof ReturnType<R>
type ForwardOptions = { forwardProps?: string[] }

const canForward = (
  prop: string,
  variantKeys: string[],
  opts: ForwardOptions = {}
) =>
  opts.forwardProps?.includes(prop) ||
  (!variantKeys.includes(prop) && !isCssProperty(prop))

/**
 * Snaps UI – Style Context Factory
 * Provides a root + slot API for building styled components
 * around a recipe definition.
 */
export function makeStyleContext<R extends RecipeFn>(recipe: R) {
  const Ctx = React.createContext<Record<SlotKey<R>, string> | null>(null)

  /**
   * Root component provider
   */
  function withSlotRootProvider<P extends {}>(Component: React.ElementType) {
    const Comp = (props: P) => {
      const [variantProps, rest] = recipe.splitVariantProps(props)
      const slots = recipe(variantProps) as Record<SlotKey<R>, string>
      return (
        <Ctx.Provider value={slots}>
          <Component {...rest} />
        </Ctx.Provider>
      )
    }
    Comp.displayName = 'SnapsRoot'
    return Comp
  }

  /**
   * Slot that can define and provide its own styles
   */
  function withSlotProvider<T, P extends { className?: string | undefined }>(
    Component: React.ElementType,
    slot: SlotKey<R>,
    opts?: ForwardOptions
  ): React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P> & React.RefAttributes<T>
  > {
    const Styled = styled(
      Component,
      {},
      {
        shouldForwardProp: (prop, variantKeys) =>
          canForward(prop, variantKeys, opts),
      }
    ) as StyledComponent<React.ElementType>

    const Comp = React.forwardRef<T, P>((props, ref) => {
      const [variantProps, rest] = recipe.splitVariantProps(props)
      const slots = recipe(variantProps) as Record<SlotKey<R>, string>
      return (
        <Ctx.Provider value={slots}>
          <Styled
            {...rest}
            ref={ref}
            className={cx(slots?.[slot], props.className)}
          />
        </Ctx.Provider>
      )
    })
    Comp.displayName = `SnapsSlotProvider(${String(slot)})`
    return Comp
  }

  /**
   * Slot that consumes styles from context
   */
  function withSlotContext<T, P extends { className?: string | undefined }>(
    Component: React.ElementType,
    slot: SlotKey<R>
  ): React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P> & React.RefAttributes<T>
  > {
    const Styled = styled(Component)
    const Comp = React.forwardRef<T, P>((props, ref) => {
      const slots = React.useContext(Ctx)
      return (
        <Styled
          {...props}
          ref={ref}
          className={cx(slots?.[slot], props.className)}
        />
      )
    })
    Comp.displayName = `SnapsSlotConsumer(${String(slot)})`
    return Comp
  }

  return { withSlotRootProvider, withSlotProvider, withSlotContext }
}
