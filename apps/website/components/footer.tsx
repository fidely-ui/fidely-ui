'use client'

import Link from 'next/link'
import { Box } from '@fidely-ui/react/box'
import { Flex } from '@fidely-ui/react/flex'
import { Stack } from '@fidely-ui/react/stack'
import { Heading } from '@fidely-ui/react/heading'
import { Text } from '@fidely-ui/react/text'

import { Grid, GridItem } from '@fidely-ui/react/grid'
import { IoLogoVercel } from 'react-icons/io5'

import { AppLogo } from '~/components/logo'
import { Span } from '@fidely-ui/react'

const documentation = [
  { href: '/docs/getting-started/installation', label: 'Getting Started' },
  { href: '/docs/components/accordion', label: 'Components' },
  { href: '/docs/theming', label: 'Theming' },
  // { href: '/blogs', label: 'Blog' },
]

const community = [
  { href: '#', label: 'Discord' },
  { href: 'https://x.com/FidelyUi', label: 'Twitter' },
  { href: 'https://github.com/fidely-ui/fidely-ui', label: 'Github' },
]

export const Footer = () => {
  return (
    <Box
      as="footer"
      role="company info"
      bg={'bg.default'}
      backdropFilter="blur(10px)"
      shadow={'2xs'}
      px={{ base: '6', md: '12' }}
      py="12"
      mt="16"
      color={'fg.subtle'}
    >
      <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
        <Stack
          gap={4}
          width={{ base: '100%', md: '50%' }}
          mt={{ base: '35px', md: '0px' }}
          color={'fg.subtle'}
        >
          <AppLogo />

          <Text>
            Build beautiful, accessible UIs with ease and Craft stunning
            interfaces, faster.
          </Text>

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

          <Flex alignItems="center" gap={2} fontSize="13px">
            <Text>Deployed on</Text>
            <IoLogoVercel />
            <Text>Vercel</Text>
          </Flex>
        </Stack>
        <Grid
          width={{ base: '100%', md: '50%' }}
          gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={{ base: '10', md: '16' }}
        >
          {/* Resources */}
          <GridItem>
            <Heading as={'h5'} textStyle={'lg'} mb={4} color={'fg.default'}>
              Documentation
            </Heading>
            <Stack gap={3}>
              {documentation.map(({ href, label }) => (
                <Link key={label} href={href}>
                  <Text
                    transition="color 0.2s ease"
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
              {community.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text
                    transition="color 0.2s ease"
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
        </Grid>
      </Flex>
    </Box>
  )
}
