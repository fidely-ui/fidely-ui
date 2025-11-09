import { Paper, Stack } from '@snaps-ui/react'

export const PaperElevation = () => {
  return (
    <Stack gap={2}>
      <Paper elevation={'0'}>Paper elevation (0)</Paper>
      <Paper elevation={'1'}>Paper elevation (1)</Paper>
      <Paper elevation={'2'}>Paper elevation (2)</Paper>
      <Paper elevation={'3'}>Paper elevation (3)</Paper>
      <Paper elevation={'4'}>Paper elevation (4)</Paper>
    </Stack>
  )
}
