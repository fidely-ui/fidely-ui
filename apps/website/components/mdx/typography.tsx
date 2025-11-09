import { Box, type BoxProps } from '@snaps-ui/react'

export const P = (props: BoxProps) => {
  return (
    <Box
      as="p"
      {...props}
      css={{
        color: 'fg.muted',
        lineHeight: '1.75',
        marginTop: '1em',
        marginBottom: '1em',
        _first: { marginTop: '0' },
        _last: { marginBottom: '0' },
        '& + .example-tabs': { marginTop: '2em' },
      }}
    />
  )
}

export const Strong = (props: BoxProps) => {
  return (
    <Box
      as="strong"
      {...props}
      css={{
        fontWeight: 'bold',
        color: 'fg.default',
      }}
    />
  )
}

export const H1 = (props: BoxProps) => {
  return (
    <Box
      as="h1"
      css={{
        color: 'fg.muted',
        fontSize: '1.5em',
        letterSpacing: '-0.02em',
        marginTop: '0',
        marginBottom: '0.8em',
        lineHeight: '1.2em',
        fontWeight: 'medium',
      }}
      {...props}
    />
  )
}

export const H2 = (props: BoxProps) => {
  return (
    <Box
      as="h2"
      css={{
        color: 'fg.muted',
        fontSize: '1.3em',
        letterSpacing: '-0.02em',
        marginTop: '1.6em',
        marginBottom: '0.8em',
        lineHeight: '1.4em',
        fontWeight: 'semibold',
        '& code': { fontSize: '0.9em' },
        '& + *': { marginTop: '0' },
        '& a': { font: 'inherit!' },
      }}
      {...props}
    />
  )
}

export const H3 = (props: BoxProps) => {
  return (
    <Box
      as="h3"
      css={{
        color: 'fg.muted',
        fontSize: '1.2em',
        letterSpacing: '-0.01em',
        marginTop: '1.5em',
        marginBottom: '0.4em',
        fontWeight: 'semibold',
        lineHeight: '1.5em',
        '& code': { fontSize: '0.9em' },
        '& + *': { marginTop: '0' },
        '& a': { font: 'inherit!' },
      }}
      {...props}
    />
  )
}

export const H4 = (props: BoxProps) => {
  return (
    <Box
      as="h4"
      css={{
        color: 'fg.muted',
        marginTop: '2em',
        marginBottom: '0.8em',
        letterSpacing: '-0.01em',
        fontWeight: 'semibold',
        lineHeight: '1.5em',
        '& + *': { marginTop: '0' },
        '& a': { font: 'inherit!' },
      }}
      {...props}
    />
  )
}
