import { Input, Stack } from '@fidely-ui/react'

export const InputSizes = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Stack gap={2}>
      {sizes.map((size) => (
        <Input placeholder="Enter email address..." size={size} key={size} />
      ))}
    </Stack>
  )
}
