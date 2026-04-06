'use client'

import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { commandInput } from 'styled-system/recipes'
import { ComponentProps } from 'styled-system/types'
import { styled } from 'styled-system/jsx'

import { Kbd } from '../kbd/index'
import { Flex } from '../flex/index'
import { Text } from '../text/index'
import { FiSearch } from '../../icons/FiSearch'

const StyledCommandInput = styled(ark.button, commandInput)

type CommandInputBaseProps = ComponentProps<typeof StyledCommandInput>

export interface CommandInputProps extends CommandInputBaseProps {
  /**
   * Keyboard shortcut used to trigger the command menu/input.
   * Example: 'Ctrl+K' or '⌘+K'
   *
   * @default
   *
   * '⌘+K'
   */
  shortcut?: string

  /**
   * Callback fired when the command input is clicked
   * or when the keyboard shortcut is triggered.
   */
  onOpen?: () => void

  /**
   * Controls the open state of the command dialog.
   * Used for accessibility (`aria-expanded`).
   */
  isOpen?: boolean

  /**
   * Placeholder text displayed inside the command input.
   *
   * @default "Search..."
   */
  placeholder?: string

  /**
   * Optional element rendered on the left side of the input.
   * Falls back to a search icon when not provided.
   */
  leftElement?: React.ReactNode
}

export const CommandInput = React.forwardRef<
  HTMLButtonElement,
  CommandInputProps
>(function CommandInput(props, ref) {
  const {
    shortcut: shortcutKey,
    onOpen,
    isOpen,
    placeholder = 'Search...',
    leftElement,
    className,
    ...rest
  } = props
  const [mounted, setMounted] = React.useState(false)

  const shortcut = shortcutKey ?? '⌘+K'

  const toggle = React.useCallback(() => {
    onOpen?.()
  }, [onOpen])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return
      }

      const parts = shortcut
        .toLowerCase()
        .split('+')
        .map((p) => p.trim())
      const key = parts.pop()
      const hasMeta = parts.includes('⌘') || parts.includes('cmd')
      const hasCtrl = parts.includes('ctrl')

      const isMatch =
        e.key.toLowerCase() === key &&
        e.ctrlKey === hasCtrl &&
        e.metaKey === hasMeta

      if (isMatch) {
        e.preventDefault()
        toggle()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [shortcut, toggle])

  return (
    <StyledCommandInput
      ref={ref}
      type="button"
      onClick={toggle}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      className={className}
      {...rest}
    >
      <Flex alignItems="center" gap="2">
        {leftElement ?? <FiSearch aria-hidden="true" focusable={false} />}
        <Text color="fg.muted">{placeholder}</Text>
      </Flex>

      {mounted && shortcut ? (
        <Flex gap="1" aria-hidden="true">
          {shortcut
            .split('+')
            .filter(Boolean)
            .map((key, i) => (
              <Kbd key={i}>{key.trim()}</Kbd>
            ))}
        </Flex>
      ) : null}
    </StyledCommandInput>
  )
})

CommandInput.displayName = 'CommandInput'
