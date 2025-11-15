import { Avatar } from '@fidely-ui/react/avatar'

export const AvatarFallback = () => {
  return (
    <>
      <Avatar.Root>
        <Avatar.Fallback name="Justice Chimobi" />
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Fallback />
      </Avatar.Root>
    </>
  )
}
