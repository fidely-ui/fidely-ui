import { Avatar } from '@fidely-ui/react/avatar'

export const AvatarBasics = () => {
  return (
    <>
      <Avatar.Root size={'lg'}>
        <Avatar.Fallback name="Justice Chimobi" />
        <Avatar.Image
          src={'https://avatars.githubusercontent.com/u/74328318?v=4'}
        />
      </Avatar.Root>
    </>
  )
}
