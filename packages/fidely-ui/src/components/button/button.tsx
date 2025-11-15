'use client'

import * as React from 'react'
import { ark, type PolymorphicProps } from '@ark-ui/react/factory'
import { styled } from '@fidely-ui/styled-system/jsx'
import { button } from '@fidely-ui/styled-system/recipes'
import { type ComponentProps } from '@fidely-ui/styled-system/types'

import { dataAttr } from '../../utils/attr'
import { Loader } from '../loader'

const StyledButton = styled(ark.button, button)

interface LoadingButtonProps {
  isLoading?: boolean
  loadingText?: React.ReactNode
  spinnerPlacement?: 'start' | 'end'
  spinner?: React.ReactNode
}

type ButtonBaseProps = ComponentProps<typeof StyledButton>

export interface ButtonProps
  extends ButtonBaseProps,
    LoadingButtonProps,
    PolymorphicProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      isLoading,
      loadingText,
      spinnerPlacement = 'start',
      children,
      asChild,
      disabled,
      spinner,
      ...rest
    } = props

    const LoaderComp = () => <Loader spinner={spinner} />

    const checkDisabled = isLoading || disabled

    const buttonContent = (
      <>
        {isLoading && spinnerPlacement === 'start' && !loadingText && (
          <LoaderComp />
        )}
        {isLoading && loadingText ? loadingText : children}
        {isLoading && spinnerPlacement === 'end' && !loadingText && (
          <LoaderComp />
        )}
      </>
    )

    if (asChild) {
      return (
        <StyledButton
          asChild
          ref={ref}
          disabled={checkDisabled}
          data-disabled={dataAttr(disabled)}
          data-loading={dataAttr(isLoading)}
          {...rest}
        >
          {children}
        </StyledButton>
      )
    }

    return (
      <StyledButton
        ref={ref}
        disabled={checkDisabled}
        data-disabled={dataAttr(disabled)}
        data-loading={dataAttr(isLoading)}
        {...rest}
      >
        {buttonContent}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
