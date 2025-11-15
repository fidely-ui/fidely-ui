import { Avatar, Button, Card } from '@fidely-ui/react'

export const CardDemo = () => {
  return (
    <Card.Root width={{ base: 'full', md: '340px' }}>
      <Card.Body gap="2">
        <Avatar.Root size="2xl" shape="rounded">
          <Avatar.Image src="https://picsum.photos/200/300" />
          <Avatar.Fallback name="Dolor Sit" />
        </Avatar.Root>
        <Card.Title mt="2">Dolor Sit</Card.Title>
        <Card.Description>
          card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur nec odio vel dui euismod fermentum. Curabitur nec odio vel
          dui euismod fermentum.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer>
    </Card.Root>
  )
}
