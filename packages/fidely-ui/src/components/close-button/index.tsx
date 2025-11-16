import { forwardRef } from 'react'

import { IconButton, type IconButtonProps } from '../icon-button/index'
import { FiClose } from '../icons/FiClose'

export interface CloseButtonProps extends IconButtonProps {}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton(props, ref) {
    return (
      <IconButton variant={'ghost'} aria-label="Close" ref={ref} {...props}>
        {props.children ?? <FiClose />}
      </IconButton>
    )
  }
)

CloseButton.displayName = 'CloseButton'
