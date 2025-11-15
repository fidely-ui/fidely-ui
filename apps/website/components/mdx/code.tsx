'use client'

import { defineStyles } from '@pandacss/dev'
import { IconButton } from '@fidely-ui/react/icon-button'
import { Box, type BoxProps } from '@fidely-ui/react/box'
import { useCallback, useEffect, useRef, useState } from 'react'
import { LuCheck, LuCopy } from 'react-icons/lu'

const preStyle = defineStyles({
  position: 'relative',
  shadow: 'inset',
  borderRadius: 'md',
  fontSize: '0.9em',
  paddingBlock: '2em',
  paddingInline: '2em',
  padding: '15px',
  overflowX: 'auto',
  fontWeight: '400',
  maxHeight: '400px',
  overflowY: 'auto',
  marginY: '1.6em',
  '& code': {
    bg: 'transparent',
    fontSize: 'inherit',
    letterSpacing: 'inherit',
    borderWidth: 'inherit',
    padding: '10px',
  },
})

export const Pre = (props: BoxProps) => {
  const isShiki = props.className?.includes('shiki')
  const [copied, setCopied] = useState(false)

  const ref = useRef<HTMLPreElement | null>(null)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const onCopy = useCallback(() => {
    if (!ref.current) return
    navigator.clipboard.writeText(ref.current.textContent || '')
    setCopied(true)
    timeout.current = setTimeout(() => {
      if (timeout.current) clearTimeout(timeout.current)
      setCopied(false)
    }, 2000)
  }, [])

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [])

  if (isShiki) {
    return (
      <Box position="relative" marginY="1.6em">
        <Box
          as="pre"
          {...props}
          ref={ref as unknown as React.Ref<HTMLDivElement>}
          css={{ ...preStyle, marginY: '0' }}
        />

        <Box pos="absolute" top="3" right="3.5">
          <IconButton onClick={onCopy} variant="ghost" size="sm">
            {copied ? <LuCheck /> : <LuCopy />}
          </IconButton>
        </Box>
      </Box>
    )
  }

  return <Box as="pre" {...props} css={preStyle} />
}

export const Code = (props: BoxProps) => {
  return (
    <Box
      as="code"
      {...props}
      css={{
        fontSize: '1em',
        letterSpacing: '-0.01em',
        whiteSpace: 'pre',
      }}
    />
  )
}
