'use client'

import * as React from 'react'
import { ark, type PolymorphicProps } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { button } from '@snaps-ui/styled-system/recipes'
import { type ComponentProps } from '@snaps-ui/styled-system/types'

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
        <StyledButton asChild disabled={checkDisabled} {...rest} ref={ref}>
          {children}
        </StyledButton>
      )
    }

    return (
      <StyledButton disabled={checkDisabled} {...rest} ref={ref}>
        {buttonContent}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
