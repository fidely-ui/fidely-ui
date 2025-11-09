'use client'

import { forwardRef } from 'react'
import { ark } from '@ark-ui/react/factory'
import type { Assign, HTMLArkProps } from '@ark-ui/react'
import { Avatar as ArkAvatar } from '@ark-ui/react/avatar'
import {
  avatar,
  type AvatarVariantProps,
} from '@snaps-ui/styled-system/recipes'
import type { HTMLStyledProps } from '@snaps-ui/styled-system/types'
import { styled } from '@snaps-ui/styled-system/jsx'

import { makeStyleContext } from '../../system/make-style-context'
import { getInitials } from '../../utils/get-initial'

const { withSlotProvider, withSlotContext } = makeStyleContext(avatar)

// -------------------- RootProvider --------------------
export interface AvatarRootProviderProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkAvatar.RootProviderBaseProps>,
    AvatarVariantProps
  > {}

export const AvatarRootProvider = withSlotProvider<
  HTMLDivElement,
  AvatarRootProviderProps
>(ArkAvatar.RootProvider, 'root')

// -------------------- Root --------------------
export interface AvatarRootProps
  extends Assign<
    Assign<HTMLStyledProps<'div'>, ArkAvatar.RootBaseProps>,
    AvatarVariantProps
  > {}

export const AvatarRoot = withSlotProvider<HTMLDivElement, AvatarRootProps>(
  ArkAvatar.Root,
  'root'
)

// -------------------- Fallback --------------------
export interface AvatarFallbackProps
  extends Assign<HTMLStyledProps<'span'>, ArkAvatar.FallbackBaseProps> {
  /**
   * The name to derive the initials from the avatar.
   */
  name?: string
}

const StyledFallback = styled(ArkAvatar.Fallback, {})

function getFallback(props: AvatarFallbackProps) {
  if (props.children) return props.children
  if (props.name) return getInitials(props.name)
  return <AvatarIcon />
}

export const AvatarFallback = forwardRef<HTMLDivElement, AvatarFallbackProps>(
  function AvatarFallback(props, ref) {
    const { name: _, ...rest } = props
    return (
      <StyledFallback ref={ref} {...rest}>
        {getFallback(props)}
      </StyledFallback>
    )
  }
)
// -------------------- Image --------------------
export interface AvatarImageProps
  extends Assign<HTMLStyledProps<'img'>, ArkAvatar.ImageBaseProps> {}

export const AvatarImage = withSlotContext<HTMLImageElement, AvatarImageProps>(
  ArkAvatar.Image,
  'image'
)

// -------------------- Icon --------------------
export interface AvatarIconProps extends HTMLArkProps<'svg'> {}

export const AvatarIcon = forwardRef<SVGSVGElement, AvatarIconProps>(
  function AvatarIcon(props, ref) {
    return (
      <ark.svg
        ref={ref}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1.2em"
        width="1.2em"
        {...props}
      >
        <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
      </ark.svg>
    )
  }
)

AvatarIcon.displayName = 'AvatarIcon'

// -------------------- Context --------------------
export const AvatarContext = ArkAvatar.Context

export interface AvatarStatusChangeDetails
  extends ArkAvatar.StatusChangeDetails {}
