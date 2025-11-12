import { forwardRef } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

import { IconButton, type IconButtonProps } from '../icon-button/index'

export interface CloseButtonProps extends IconButtonProps {}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton(props, ref) {
    return (
      <IconButton variant={'ghost'} aria-label="Close" ref={ref} {...props}>
        {props.children ?? <IoCloseOutline />}
      </IconButton>
    )
  }
)

CloseButton.displayName = 'CloseButton'
