'use client'

import { forwardRef } from 'react'
import { cx } from '@fidely-ui/styled-system/css'

import { Avatar } from '../avatar/index'
import { Text } from '../text/index'
import { Flex } from '../flex/index'
import { Stack } from '../stack/index'
import type { BoxProps } from '../box/index'

export interface PersonaProps extends Omit<BoxProps, 'direction'> {
  /** The name of the person */
  name?: string
  /** The secondary text (e.g. job title, role, etc.) */
  title?: string
  /** The image URL for the avatar */
  img?: string
  /** The avatar size — supports same variants as Avatar */
  imgSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  /** Controls the layout direction (horizontal or vertical) */
  orientation?: 'horizontal' | 'vertical'
  /** Gap between avatar and text */
  spacing?: number
}

export const Persona = forwardRef<HTMLDivElement, PersonaProps>(
  function Persona(props, ref) {
    const {
      name,
      title,
      img,
      imgSize = 'md',
      orientation = 'horizontal',
      spacing = 3,
      className,
      ...rest
    } = props

    const sizeMap = {
      xs: { gap: 1, nameSize: 'xs', titleSize: 'xs', nameWeight: 'medium' },
      sm: { gap: 1.5, nameSize: 'sm', titleSize: 'xs', nameWeight: 'medium' },
      md: { gap: 2, nameSize: 'sm', titleSize: 'xs', nameWeight: 'semibold' },
      lg: { gap: 3, nameSize: 'md', titleSize: 'sm', nameWeight: 'semibold' },
      xl: { gap: 3.5, nameSize: 'md', titleSize: 'sm', nameWeight: 'semibold' },
      '2xl': { gap: 4, nameSize: 'lg', titleSize: 'md', nameWeight: 'bold' },
    } as const

    const current = sizeMap[imgSize]

    return (
      <Flex
        ref={ref}
        flexDirection={orientation === 'horizontal' ? 'row' : 'column'}
        alignItems={orientation === 'horizontal' ? 'center' : 'flex-start'}
        gap={spacing ?? current.gap}
        className={cx('fidely-persona', className)}
        {...rest}
      >
        <Avatar.Root size={imgSize}>
          <Avatar.Fallback name={name} />
          <Avatar.Image src={img} alt={name} />
        </Avatar.Root>

        {(name || title) && (
          <Stack gap={'0'}>
            {name && (
              <Text
                fontWeight="medium"
                color="fg.default"
                fontSize={current.nameSize}
              >
                {name}
              </Text>
            )}
            {title && (
              <Text color="fg.muted" fontSize={current.titleSize}>
                {title}
              </Text>
            )}
          </Stack>
        )}
      </Flex>
    )
  }
)

Persona.displayName = 'Persona'
