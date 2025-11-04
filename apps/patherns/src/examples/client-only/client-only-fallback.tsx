import { ClientOnly, SkeletonText } from '@snaps-ui/react'

export const ClientOnlyFallback = () => {
  return (
    <ClientOnly fallback={<SkeletonText noOfLines={1} />}>
      <div>This content is only rendered on the client side.</div>
    </ClientOnly>
  )
}
