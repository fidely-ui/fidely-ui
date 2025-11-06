'use client'

import Link from 'next/link'
import { Box } from '@snaps-ui/react/box'
import { Flex } from '@snaps-ui/react/flex'
import { Stack } from '@snaps-ui/react/stack'
import { Typography } from '@snaps-ui/react/typography'
import { Grid, GridItem } from '@snaps-ui/react/grid'
import { IoLogoVercel } from 'react-icons/io5'

import { AppLogo } from '~/components/logo'

const resources = [
  { href: '/docs/getting-started/introduction', label: 'Documentations' },
  { href: '/docs/components', label: 'Components' },
  // { href: '/blogs', label: 'Blog' },
]

const community = [
  { href: '#', label: 'Discord' },
  { href: 'https://x.com/SnapsUi', label: 'Twitter' },
  { href: 'https://github.com/snaps-ui/snaps-ui', label: 'Github' },
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
        >
          <AppLogo />

          <Typography variant="body2">
            Build beautiful, accessible UIs with ease and Craft stunning
            interfaces, faster.
          </Typography>

          <Typography variant="body2">
            Maintained by{' '}
            <Typography
              variant="body2"
              color={'orange.9'}
              as={'span'}
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
            </Typography>{' '}
            and contributors
          </Typography>

          <Flex alignItems="center" gap={2} fontSize="13px">
            <Typography variant="body2">Deployed on</Typography>
            <IoLogoVercel />
            <Typography variant="body2">Vercel</Typography>
          </Flex>
        </Stack>
        <Grid
          width={{ base: '100%', md: '50%' }}
          gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={{ base: '10', md: '16' }}
        >
          {/* Resources */}
          <GridItem>
            <Typography variant="body1" mb={4}>
              Resources
            </Typography>
            <Stack gap={3}>
              {resources.map(({ href, label }) => (
                <Link key={label} href={href}>
                  <Typography
                    variant="body2"
                    transition="color 0.2s ease"
                    _hover={{
                      color: 'fg.subtle',
                      _dark: { color: 'fg.muted' },
                    }}
                  >
                    {label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </GridItem>

          {/* Community */}
          <GridItem>
            <Typography variant="body1" mb={4}>
              Community
            </Typography>
            <Stack gap={3}>
              {community.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography
                    variant="body2"
                    transition="color 0.2s ease"
                    _hover={{
                      color: 'fg.subtle',
                      _dark: { color: 'fg.muted' },
                    }}
                  >
                    {label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  )
}
