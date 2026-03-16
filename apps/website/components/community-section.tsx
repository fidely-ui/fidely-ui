import Link from 'next/link'
import { Box } from '@fidely-ui/react/box'
import { Card } from '@fidely-ui/react/card'
import { Grid, GridItem } from '@fidely-ui/react/grid'
import { Heading } from '@fidely-ui/react/heading'
import { Text } from '@fidely-ui/react/text'
import { Icon } from '@fidely-ui/react/icon'
import { IoMdHand } from 'react-icons/io'

import { communities } from '~/constant/communities'

export const CommunitySection = () => {
  return (
    <Box as="section" px="4" py="4">
      <Box w="90%" m="4.5rem auto">
        <Box mb="25px">
          <Heading
            as="h4"
            textStyle={{ base: '2xl', md: '3xl' }}
            mb="5px"
            fontWeight="semibold"
          >
            Join our fast-growing community
          </Heading>

          <Text color={'fg.muted'}>
            A welcoming and engaged community
            <Icon size="lg" colorPalette="amber" color="colorPalette.9" ml="1">
              <IoMdHand />
            </Icon>
          </Text>
        </Box>

        <Grid
          w={{ base: '100%', md: '70%' }}
          gridTemplateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={{ base: '2', md: '3' }}
        >
          {communities.map((item) => {
            return (
              <GridItem
                key={item.name}
                height="min-content"
                transition="all 0.2s ease"
                _hover={{
                  transform: 'translateY(-4px)',
                  shadow: 'lg',
                  cursor: 'pointer',
                }}
                asChild
              >
                <Link
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Root>
                    <Card.Header>
                      <Icon size="xl">
                        <item.icon />
                      </Icon>
                      <Card.Title mt="2">{item.name}</Card.Title>
                    </Card.Header>
                    <Card.Body gap="2">
                      <Card.Description>{item.text}</Card.Description>
                    </Card.Body>
                  </Card.Root>
                </Link>
              </GridItem>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}
