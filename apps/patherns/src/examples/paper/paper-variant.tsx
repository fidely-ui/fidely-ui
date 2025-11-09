import { Paper, Stack } from '@snaps-ui/react'

export const PaperVariant = () => {
  return (
    <Stack gap={2}>
      <Paper variant={'filled'}>Paper filled variant</Paper>
      <Paper variant={'outline'}>Paper outline variant</Paper>
    </Stack>
  )
}
