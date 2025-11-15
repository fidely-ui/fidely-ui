import { Avatar } from '@fidely-ui/react/avatar'

export const AvatarSizes = () => {
  return (
    <>
      <Avatar.Root size={'xl'}>
        <Avatar.Image src={'http://bit.ly/43kBcJt'} />
      </Avatar.Root>

      <Avatar.Root size={'md'}>
        <Avatar.Image src={'http://bit.ly/47jPX1D'} />
      </Avatar.Root>

      <Avatar.Root size={'xs'}>
        <Avatar.Image src={'https://rb.gy/39f8mx'} />
      </Avatar.Root>
    </>
  )
}
