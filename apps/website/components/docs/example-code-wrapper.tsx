import { Box, type BoxProps } from '@fidely-ui/react/box'

export const ExampleCodeWrapper = (props: BoxProps) => {
  const { children, ...rest } = props

  return (
    <Box
      height="100%"
      overflow="auto"
      pos="relative"
      {...rest}
      css={{
        '& pre': {
          px: '15px',
          py: '15px',
          overflow: 'auto',
          my: '0',
        },
      }}
    >
      {children}
    </Box>
  )
}
