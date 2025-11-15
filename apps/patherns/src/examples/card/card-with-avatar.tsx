import {
  Avatar,
  Button,
  Card,
  Flex,
  HStack,
  Stack,
  Text,
} from '@fidely-ui/react'
import { LuCheck, LuX } from 'react-icons/lu'

export const CardWithAvatar = () => {
  return (
    <Card.Root width={{ base: 'full', md: '340px' }}>
      <Card.Body gap="2">
        <Card.Header>
          <Flex justifyContent={'space-between'} alignItems={'flex-start'}>
            <HStack mb="6" gap="3">
              <Avatar.Root>
                <Avatar.Fallback name="Nelson Chinedu" />
                <Avatar.Image src="/nelson.jpeg" />
              </Avatar.Root>

              <Stack gap="0">
                <Card.Title mt="2">Nelson Chinedu</Card.Title>
                <Text textStyle={'sm'}>Frontend Engineer</Text>
              </Stack>
            </HStack>
          </Flex>
        </Card.Header>
        <Card.Description>
          Fidely UI completely changed how I build apps. Everything is
          composable and the design system is consistent out of the box
        </Card.Description>
        <Card.Footer>
          <Button variant="subtle" ripple colorPalette={'orange'} flex="1">
            <LuX />
            Decline
          </Button>
          <Button ripple colorPalette={'orange'} flex="1">
            <LuCheck />
            Follow
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  )
}
