import { Avatar, AvatarGroup } from '@fidely-ui/react/avatar'
import { imgUrl } from './avatar-group-basics'

export const AvatarGroupSpace = () => {
  return (
    <>
      <AvatarGroup spaceX={'-0.5'}>
        {imgUrl.map((data) => (
          <Avatar.Root size={'lg'} key={data.id}>
            <Avatar.Fallback />
            <Avatar.Image src={data.img} />
          </Avatar.Root>
        ))}
      </AvatarGroup>
    </>
  )
}
