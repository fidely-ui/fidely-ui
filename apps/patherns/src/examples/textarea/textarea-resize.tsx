import { Stack, Textarea } from '@snaps-ui/react'

export const TextareaResize = () => {
  return (
    <Stack gap="4" maxWidth="250px">
      <Textarea resize="none" placeholder="Search the docs…" />
      <Textarea resize="vertical" placeholder="Search the docs…" />
      <Textarea resize="horizontal" placeholder="Search the docs…" />
      <Textarea resize="both" placeholder="Search the docs…" />
    </Stack>
  )
}
