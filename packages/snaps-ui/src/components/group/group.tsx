'use client'

import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { group } from '@snaps-ui/styled-system/recipes'
import { type ComponentProps } from '@snaps-ui/styled-system/types'
import { cx } from '@snaps-ui/styled-system/css'

const StyledGroup = styled(ark.div, group)

type GroupBaseProps = ComponentProps<typeof StyledGroup>

export interface GroupProps extends GroupBaseProps {}

export const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  function Group(props, ref) {
    const {
      alignItems = 'center',
      justifyContent = 'flex-start',
      flexWrap,
      children,
      className,
      ...rest
    } = props

    return (
      <StyledGroup
        ref={ref}
        alignItems={alignItems}
        justifyContent={justifyContent}
        flexWrap={flexWrap}
        {...rest}
        className={cx(className)}
      >
        {children}
      </StyledGroup>
    )
  }
)

Group.displayName = 'Group'
