'use client'

import * as React from 'react'
import { Avatar } from '@snaps-ui/react/avatar'
import { Badge } from '@snaps-ui/react/badge'
import { Box } from '@snaps-ui/react/box'
import { Card } from '@snaps-ui/react/card'
import { Flex } from '@snaps-ui/react/flex'
import { Grid, GridItem } from '@snaps-ui/react/grid'
import { IconButton } from '@snaps-ui/react/icon-button'
import { Input } from '@snaps-ui/react/input'
import { InputGroup } from '@snaps-ui/react/input-group'
import { InputAddon } from '@snaps-ui/react/input-addon'
import { Persona } from '@snaps-ui/react/persona'
import { Table } from '@snaps-ui/react/table'
import { Text } from '@snaps-ui/react/text'
import { Heading } from '@snaps-ui/react/heading'
import { VStack } from '@snaps-ui/react/stack'
import { BiSearch } from 'react-icons/bi'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

import {
  asideItems,
  exampleDashboardData,
  exampleUsersData,
} from '~/constant/example-contants'

export const DashboardExample = () => {
  const [searchValue, setSearchValue] = React.useState('')

  return (
    <Box
      height={'auto'}
      display={'flex'}
      borderRadius={'12px'}
      overflow={'hidden'}
      borderWidth={'1px'}
      borderColor={'bg.emphasized'}
    >
      <Box
        width={'20%'}
        bg={'bg.emphasized'}
        height={'100vh'}
        display={{ base: 'none', md: 'block' }}
      >
        <DashboardSideBar />
      </Box>

      <Box width={{ base: '100%', md: '80%' }}>
        <DashboardNavBar onSearchChange={setSearchValue} />

        <DashboardMain searchValue={searchValue} />
      </Box>
    </Box>
  )
}

export const DashboardSideBar = () => {
  return (
    <Box position={'relative'} height={'100vh'}>
      <Box padding={'10px'} borderBottom={'0.6px solid white'}>
        <Heading fontWeight={'bold'} as={'h3'} textStyle={'2xl'}>
          Snaps Inc.
        </Heading>
      </Box>

      <Box mt={'15px'}>
        {asideItems.map((nav) => (
          <Text
            padding={'12px'}
            _hover={{ bg: 'bg.subtle' }}
            cursor={'pointer'}
            key={nav.label}
            display={'flex'}
            alignItems={'center'}
            gap={'2'}
          >
            <nav.icon /> {nav.label}
          </Text>
        ))}
      </Box>

      <Box position={'absolute'} bottom={'0px'} padding={'10px'}>
        <Persona
          name="Justice Chimobi"
          title="Creator Snaps UI"
          img={'https://avatars.githubusercontent.com/u/74328318?v=4'}
          imgSize="sm"
        />
      </Box>
    </Box>
  )
}

interface DashboardNavBarProps {
  onSearchChange: (value: string) => void
}

export const DashboardNavBar = ({ onSearchChange }: DashboardNavBarProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
  }

  return (
    <Flex padding={'10px'}>
      <Box width={'80%'}>
        <InputGroup>
          <InputAddon bg={'bg.emphasized'}>
            <BiSearch />
          </InputAddon>
          <Input
            placeholder="search dashboard..."
            onChange={handleInputChange}
          />
        </InputGroup>
      </Box>

      <Box width={'20%'}>
        <Flex justifyContent={'flex-end'} alignItems={'center'} gap={'4px'}>
          <Avatar.Root size={'lg'}>
            <Avatar.Fallback name="Justice Chimobi" />
            <Avatar.Image
              src={'https://avatars.githubusercontent.com/u/74328318?v=4'}
            />
          </Avatar.Root>
        </Flex>
      </Box>
    </Flex>
  )
}

interface DashboardMainProps {
  searchValue: string
}

export const DashboardMain = ({ searchValue }: DashboardMainProps) => {
  const filteredUsers = React.useMemo(() => {
    const query = searchValue.toLocaleLowerCase().trim()
    if (!query) return exampleUsersData

    return exampleUsersData.filter((d) =>
      [d.user.name, d.user.email].some((field) =>
        field.toLocaleLowerCase().includes(query)
      )
    )
  }, [searchValue])

  return (
    <Box padding={'10px'}>
      <Grid
        mx="auto"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
        gap={{ base: '2', md: '1.5' }}
      >
        {exampleDashboardData.map((data) => (
          <GridItem key={data.id}>
            <Card.Root>
              <Card.Body>
                <Flex
                  justifyContent={'space-between'}
                  alignItems={'flex-start'}
                >
                  <VStack gap={'2'}>
                    <Heading as={'h5'}>{data.name}</Heading>
                    <Text textStyle={'md'}>{data.numbers}</Text>
                  </VStack>

                  <Box>
                    <FaArrowTrendUp />
                  </Box>
                </Flex>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>

      <Box mt={'25px'}>
        <Table.ScrollArea>
          <Table.Root hoverable size={'sm'}>
            <Table.Header>
              <Table.Row>
                <Table.HeadCell>Users</Table.HeadCell>
                <Table.HeadCell>Revenue</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>Visits</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((d) => (
                  <Table.Row key={d.id}>
                    <Table.Cell>
                      <Persona
                        name={d.user.name}
                        title={d.user.email}
                        img={d.user.avatar}
                        imgSize="md"
                      />
                    </Table.Cell>
                    <Table.Cell>{d.revenue}</Table.Cell>
                    <Table.Cell>
                      <Badge
                        size={'sm'}
                        colorPalette={d.status === 'Done' ? 'green' : ''}
                      >
                        {d.status}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>{d.id}</Table.Cell>
                    <Table.Cell textAlign={'right'}>
                      <IconButton variant={'ghost'} size={'sm'}>
                        <HiOutlineDotsHorizontal />
                      </IconButton>
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={5} textAlign="center">
                    No matching users found.
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </Box>
    </Box>
  )
}
