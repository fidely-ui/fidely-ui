'use client'

import { forwardRef } from 'react'

import { Button, type ButtonProps } from '../button/index'

export interface IconButtonProps extends ButtonProps {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    return (
      <Button
        ref={ref}
        px="0"
        py="0"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        _icon={{ fontSize: '1.1em' }}
        {...props}
      />
    )
  }
)

IconButton.displayName = 'IconButton'
