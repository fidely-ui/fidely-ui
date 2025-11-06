import { Skeleton, Stack } from '@snaps-ui/react'

export const SkeletonBasic = () => {
  return (
    <Stack gap={3}>
      {[1, 3, 4].map((d) => (
        <Skeleton key={d} height={'25px'} />
      ))}
    </Stack>
  )
}
