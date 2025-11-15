'use client'

import { Avatar, AvatarGroup } from '@fidely-ui/react/avatar'
import { Button } from '@fidely-ui/react/button'
import { Box } from '@fidely-ui/react/box'
import { Center } from '@fidely-ui/react/center'
import { Flex } from '@fidely-ui/react/flex'
import { Field } from '@fidely-ui/react/field'
import { Input } from '@fidely-ui/react/input'
import { Paper } from '@fidely-ui/react/paper'
import { HStack, Stack, VStack } from '@fidely-ui/react/stack'
import { Textarea } from '@fidely-ui/react/textarea'
import { Text } from '@fidely-ui/react/text'
import { Heading } from '@fidely-ui/react/heading'
import { Tabs } from '@fidely-ui/react/tabs'
import { Checkbox } from '@fidely-ui/react/checkbox'
import { Spinner } from '@fidely-ui/react/spinner'
import { FaPlus } from 'react-icons/fa6'
import { InputGroup } from '@fidely-ui/react/input-group'
import { InputAddon } from '@fidely-ui/react/input-addon'
import { Switch } from '@fidely-ui/react/switch'
import { Persona } from '@fidely-ui/react/persona'
import { BiSearch, BiUser } from 'react-icons/bi'

import { useToggleTheme } from '~/hooks/useToggleTheme'

export const BillingAddress = () => {
  return (
    <Paper width={'full'} height="min-content">
      <Stack gap={2} mb={'15px'}>
        <Heading as={'h3'}>Billing Address</Heading>
        <Text>The billing address associated with your payment method</Text>
      </Stack>

      <Stack mb={'4'}>
        <Checkbox.Root size={'sm'} colorPalette={'orange'} defaultChecked>
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label>Same as Shipping address.</Checkbox.Label>
        </Checkbox.Root>
      </Stack>

      <Stack gap={5}>
        <Field.Root>
          <Field.Label>Message</Field.Label>
          <Textarea
            placeholder="Add any additional message"
            variant={'subtle'}
            rows={4}
          />
        </Field.Root>

        <HStack gap={3}>
          <Button colorPalette={'orange'} ripple>
            Submit
          </Button>
          <Button variant={'outline'} colorPalette={'orange'} ripple>
            Cancel
          </Button>
        </HStack>
      </Stack>
    </Paper>
  )
}

export const PaymentMethod = () => {
  return (
    <Paper width={'full'} height="min-content">
      <Stack gap={2} mb={'15px'}>
        <Heading as={'h3'}>Payment Method</Heading>
        <Text>All transactions are secure and encrypted</Text>
      </Stack>

      <Stack gap={5}>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input placeholder="John Doe" variant={'subtle'} />
        </Field.Root>

        <Flex gap={3}>
          <Box width={'70%'}>
            <Field.Root invalid required>
              <Field.Label>
                Card Number <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="1234 45675 45332 3445" variant={'subtle'} />
              <Field.Error>The card number is required</Field.Error>
            </Field.Root>
          </Box>

          <Box width={'30%'}>
            <Field.Root>
              <Field.Label>CVV</Field.Label>
              <Input placeholder="John Doe" variant={'subtle'} />
            </Field.Root>
          </Box>
        </Flex>
      </Stack>
    </Paper>
  )
}

export const teamImages = [
  {
    name: 'Justice Chimobi',
    image: 'https://avatars.githubusercontent.com/u/74328318?v=4',
  },
  {
    name: 'Nelson Chinedu',
    image: 'https://avatars.githubusercontent.com/u/26670804?v=4',
  },
]

export const TeamMembers = () => {
  return (
    <Paper width={'full'} height="min-content">
      <Center>
        <Stack gap={4} mb={'15px'} textAlign={'center'}>
          <AvatarGroup justifyContent={'center'}>
            {teamImages.map((team) => (
              <Avatar.Root key={team.name}>
                <Avatar.Fallback name={team.name} />
                <Avatar.Image src={team.image} />
              </Avatar.Root>
            ))}
            <Avatar.Root>
              <Avatar.Fallback>+3</Avatar.Fallback>
            </Avatar.Root>
          </AvatarGroup>
          <Text textAlign={'center'}>No Team Members</Text>
          <Text>Invite your team to collaborate on this project.</Text>

          <Button colorPalette={'orange'}>
            <FaPlus /> Invite Member
          </Button>
        </Stack>
      </Center>
    </Paper>
  )
}

export const TabsExample = () => {
  return (
    <Paper width={'full'} height="min-content">
      <Stack mb={'15px'}>
        <Heading as={'h3'}>Tabs</Heading>
      </Stack>

      <Tabs.Root variant="outline" defaultValue="fidely">
        <Tabs.List>
          <Tabs.Trigger value="fidely">fidely</Tabs.Trigger>
          <Tabs.Trigger value="dashboard">Dashboard</Tabs.Trigger>
          <Tabs.Trigger value="authentication">Authentication</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="fidely" width="full" p="3">
          <Text textStyle={'sm'}>
            Fidely UI is a modern UI library with reusable, intuitive components
            that help you ship products faster. Create beautiful, consistent
            interfaces with customizable, production-ready building blocks.
          </Text>
        </Tabs.Content>

        <Tabs.Content value="dashboard" p="3">
          <Text textStyle={'sm'}>
            Coming soon — a visual dashboard overview.
          </Text>
        </Tabs.Content>

        <Tabs.Content value="authentication" p="3">
          <Text textStyle={'sm'}>
            Manage user sign-in and security settings here.
          </Text>
        </Tabs.Content>
      </Tabs.Root>
    </Paper>
  )
}

export const ProcessingCard = () => {
  return (
    <Paper width={'full'} height="min-content">
      <Center>
        <Stack gap={4} mb={'15px'} textAlign={'center'}>
          <VStack
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Spinner />
          </VStack>

          <Text>Payment processing</Text>

          <Text>Please wait while we process your payment</Text>

          <Button colorPalette={'orange'} width={'auto'}>
            Stop processing
          </Button>
        </Stack>
      </Center>
    </Paper>
  )
}

export const MoreComponents = () => {
  const { toggleTheme } = useToggleTheme()

  return (
    <Paper width={'full'} height="min-content">
      <Stack gap={4} mb={'15px'}>
        <Stack gap={4}>
          <Heading as={'h6'} textStyle={'lg'}>
            Input Group
          </Heading>
          <InputGroup startAddon={<BiUser />}>
            <Input placeholder="@justicechimobi_" />
          </InputGroup>

          <InputGroup>
            <InputAddon placement={'left'} bg={'bg.emphasized'}>
              <BiSearch />
            </InputAddon>
            <Input placeholder="search..." />
            <InputAddon placement={'right'} bg={'bg.emphasized'}>
              23 results
            </InputAddon>
          </InputGroup>
        </Stack>

        <Stack gap={3}>
          <Heading as={'h6'} textStyle={'lg'}>
            Switch
          </Heading>

          <Switch.Root
            colorPalette={'orange'}
            defaultChecked
            onCheckedChange={toggleTheme}
          >
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label>Switch color mode</Switch.Label>
          </Switch.Root>
        </Stack>

        <Stack gap={3}>
          <Heading as={'h6'} textStyle={'lg'}>
            Persona
          </Heading>
          <Persona
            name="Leanne Graham"
            title="harness real-time e-markets"
            img={'http://bit.ly/47jPX1D'}
            imgSize="lg"
          />
        </Stack>
      </Stack>
    </Paper>
  )
}
