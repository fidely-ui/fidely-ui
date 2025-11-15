import { FormatByte, Stack, Text } from '@fidely-ui/react'

export const FormatBytes = () => {
  return (
    <Stack gap={2}>
      <Text>
        <FormatByte value={50} />
      </Text>

      <Text>
        <FormatByte value={500} />
      </Text>

      <Text>
        <FormatByte value={50000} />
      </Text>
      <Text>
        <FormatByte value={50000000} />
      </Text>

      <Text>
        <FormatByte value={1450.45} unit="bit" />
      </Text>
    </Stack>
  )
}
