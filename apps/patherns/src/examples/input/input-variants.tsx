import { Input, Stack } from '@fidely-ui/react'

export const InputVariants = () => {
  const variants = ['subtle', 'flushed', 'outline'] as const

  return (
    <Stack gap={2}>
      {variants.map((variant) => (
        <Input placeholder="Enter email..." variant={variant} key={variant} />
      ))}
    </Stack>
  )
}
