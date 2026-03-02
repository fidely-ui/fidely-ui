import Link from 'next/link'
import { Box } from '@fidely-ui/react/box'
import { Center } from '@fidely-ui/react/center'
import { Flex } from '@fidely-ui/react/flex'
import { Stack } from '@fidely-ui/react/stack'
import { Span } from '@fidely-ui/react/span'
import { Heading } from '@fidely-ui/react/heading'
import { Text } from '@fidely-ui/react/text'
import { Grid, GridItem } from '@fidely-ui/react/grid'

import { AppLogo } from '~/components/logo'
import { InfoBadge } from '~/components/nav-item'
import {
  ABOUT_LINK,
  COMMUNITY_LINK,
  DOCUMENTATION_LINK,
  RESOURCES_LINK,
} from '~/constant/footer-links'

export const Footer = () => {
  return (
    <Box as="footer" px="4" py="4">
      <Flex
        w="90%"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ base: 'column-reverse', lg: 'row' }}
      >
        <Stack
          gap={4}
          width={{ base: '100%', lg: '50%' }}
          mt={{ base: '35px', md: '0px' }}
          color={'fg.subtle'}
        >
          <AppLogo />

          <Text>Build production-ready React apps faster</Text>

          <Text>
            Maintained by{' '}
            <Span
              color={'orange.9'}
              transition="color 0.2s ease"
              fontWeight="bolder"
              _hover={{
                color: 'orange.10',
              }}
            >
              <Link
                href="https://github.com/chimobi-justice"
                target="_blank"
                rel="noopener noreferrer"
              >
                Justice Chimobi
              </Link>
            </Span>{' '}
            and contributors
          </Text>
        </Stack>
        <Grid
          width={{ base: '100%', lg: '50%' }}
          gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={{ base: '10', md: '6' }}
        >
          {/* About */}
          <GridItem>
            <Heading as={'h5'} textStyle={'lg'} mb={4} color={'fg.default'}>
              About
            </Heading>
            <Stack gap={3}>
              {ABOUT_LINK.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text
                    transition="color 0.2s ease"
                    display="flex"
                    alignItems="center"
                    gap="2"
                    color={'fg.subtle'}
                    _hover={{
                      color: 'fg.muted',
                    }}
                  >
                    {label}
                  </Text>
                </Link>
              ))}
            </Stack>
          </GridItem>

          {/* Documentation */}
          <GridItem>
            <Heading as={'h5'} textStyle={'lg'} mb={4} color={'fg.default'}>
              Documentation
            </Heading>
            <Stack gap={3}>
              {DOCUMENTATION_LINK.map(({ href, label }) => (
                <Link key={label} href={href}>
                  <Text
                    transition="color 0.2s ease"
                    display="flex"
                    alignItems="center"
                    gap="2"
                    color={'fg.subtle'}
                    _hover={{
                      color: 'fg.muted',
                    }}
                  >
                    {label}
                  </Text>
                </Link>
              ))}
            </Stack>
          </GridItem>

          {/* Community */}
          <GridItem>
            <Heading as={'h5'} textStyle={'lg'} mb={4} color={'fg.default'}>
              Community
            </Heading>
            <Stack gap={3}>
              {COMMUNITY_LINK.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text
                    transition="color 0.2s ease"
                    display="flex"
                    alignItems="center"
                    gap="2"
                    color={'fg.subtle'}
                    _hover={{
                      color: 'fg.muted',
                    }}
                  >
                    {label}
                  </Text>
                </Link>
              ))}
            </Stack>
          </GridItem>

          {/* Resources */}
          <GridItem>
            <Heading as={'h5'} textStyle={'lg'} mb={4} color={'fg.default'}>
              Resources
            </Heading>
            <Stack gap={3}>
              {RESOURCES_LINK.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text
                    transition="color 0.2s ease"
                    display="flex"
                    alignItems="center"
                    gap="2"
                    color={'fg.subtle'}
                    _hover={{
                      color: 'fg.muted',
                    }}
                  >
                    {label} <InfoBadge info="soon" />
                  </Text>
                </Link>
              ))}
            </Stack>
          </GridItem>
        </Grid>
      </Flex>

      <Center
        borderTopWidth="1px"
        borderTopStyle="solid"
        borderColor="border.muted"
        mt="5"
        py="4"
      >
        <Text>© {new Date().getFullYear()} Fidely UI. All rights reserved</Text>
      </Center>
    </Box>
  )
}
