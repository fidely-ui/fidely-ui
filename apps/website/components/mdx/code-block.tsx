import { Box, HStack, Text } from '@snaps-ui/react'

interface CodeBlockProps {
  title?: string
  children: React.ReactNode
  [key: string]: any
}

export const CodeBlock = (props: CodeBlockProps) => {
  const { title, lang, children, ...rest } = props
  return (
    <Box
      {...rest}
      data-lang={lang}
      spaceY="0!"
      marginY="1.6em"
      borderWidth="1px"
      rounded="10px"
      borderColor="gray.800"
      css={{
        '& pre.shiki': {
          roundedTop: '0!',
          roundedBottom: 'lg!',
          shadow: 'none!',
          border: 'red',
        },
      }}
    >
      <HStack
        bg="#1E1E1E"
        px="4"
        py="3"
        color="gray.300"
        roundedTop="lg"
        borderBottomWidth="1px"
        borderBottomColor="gray.800"
      >
        <Text fontSize="xs" fontFamily="mono" fontWeight="semibold">
          {title}
        </Text>
      </HStack>
      {children}
    </Box>
  )
}
