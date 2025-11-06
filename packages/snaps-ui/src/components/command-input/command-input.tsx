'use client'

import * as React from 'react'
import { LuSearch } from 'react-icons/lu'
import { cx } from '@snaps-ui/styled-system/css'
import { commandInputRecipe } from '@snaps-ui/styled-system/recipes'

import { Group } from '../group/index'
import { Kbd } from '../kbd/index'
import { Flex } from '../flex/index'
import { Typography } from '../typography/index'
import { BoxProps } from '../box/index'
import { isMobileDevice } from '../../utils/is-mobile-device'

export interface CommandInputProps extends Omit<BoxProps, 'direction'> {
  shortcut?: string
  onOpen?: () => void
  placeholder?: string
  leftElement?: React.ReactNode
}

export const CommandInput = React.forwardRef<
  HTMLInputElement,
  CommandInputProps
>(function CommandInput(props, ref) {
  const {
    shortcut,
    onOpen,
    placeholder = 'Search...',
    leftElement,
    className,
    ...rest
  } = props
  const slotStyles = commandInputRecipe()

  const [isMobile, setIsMobile] = React.useState(false)
  const [resolvedShortcut, setResolvedShortcut] = React.useState<string | null>(
    null
  )

  React.useEffect(() => {
    const mobile = isMobileDevice()
    setIsMobile(mobile)
    if (!mobile) {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent)
      setResolvedShortcut(shortcut ?? (isMac ? '⌘ + K' : 'Ctrl + K'))
    }
  }, [shortcut])

  React.useEffect(() => {
    if (isMobile || !resolvedShortcut) return

    const parts = resolvedShortcut.split('+').map((p) => p.trim().toLowerCase())

    const handleKeyDown = (e: KeyboardEvent) => {
      const pressed: string[] = []
      if (e.metaKey) pressed.push('⌘')
      if (e.ctrlKey) pressed.push('ctrl')
      pressed.push(e.key.toLowerCase())

      const combo = pressed.join(' ')
      const target = parts.join(' ').toLowerCase()

      if (combo === target) {
        e.preventDefault()
        onOpen?.()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [resolvedShortcut, onOpen, isMobile])

  return (
    <Group
      as="button"
      ref={ref}
      onClick={onOpen}
      aria-haspopup="dialog"
      aria-expanded={false}
      className={cx(slotStyles, className)}
      {...rest}
    >
      <Flex alignItems="center" gap="2">
        {leftElement ?? <LuSearch />}
        <Typography color="fg.muted">{placeholder}</Typography>
      </Flex>

      {!isMobile && resolvedShortcut ? (
        <Flex gap="1">
          {resolvedShortcut.split('+').map((key, i) => (
            <Kbd key={i}>{key.trim()}</Kbd>
          ))}
        </Flex>
      ) : null}
    </Group>
  )
})

CommandInput.displayName = 'CommandInput'
