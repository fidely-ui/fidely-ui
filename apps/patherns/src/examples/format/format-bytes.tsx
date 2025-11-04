import { FormatByte, Stack, Typography } from '@snaps-ui/react'

export const FormatBytes = () => {
  return (
    <Stack gap={2}>
      <Typography>
        <FormatByte value={50} />
      </Typography>

      <Typography>
        <FormatByte value={500} />
      </Typography>

      <Typography>
        <FormatByte value={50000} />
      </Typography>
      <Typography>
        <FormatByte value={50000000} />
      </Typography>

      <Typography>
        <FormatByte value={1450.45} unit="bit" />
      </Typography>
    </Stack>
  )
}
