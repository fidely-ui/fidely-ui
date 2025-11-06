import { Stack, Textarea } from '@snaps-ui/react'

export const TextareaVariants = () => {
  const variants = ['subtle', 'flushed', 'outline'] as const

  return (
    <Stack gap={2}>
      {variants.map((variant) => (
        <Textarea placeholder="Comment..." variant={variant} key={variant} />
      ))}
    </Stack>
  )
}
