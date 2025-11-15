import { Stack, Textarea } from '@fidely-ui/react'

export const TextareaSizes = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Stack gap={2}>
      {sizes.map((size) => (
        <Textarea placeholder="Comment..." size={size} key={size} />
      ))}
    </Stack>
  )
}
