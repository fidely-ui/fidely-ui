import Link from 'next/link'
import { Box } from '@fidely-ui/react/box'
import { Divider } from '@fidely-ui/react/divider'
import { Flex } from '@fidely-ui/react/flex'
import { Grid, GridItem } from '@fidely-ui/react/grid'
import { HStack, Stack } from '@fidely-ui/react/stack'
import { Span } from '@fidely-ui/react/span'
import { Heading } from '@fidely-ui/react/heading'
import { Text } from '@fidely-ui/react/text'
import { IconButton } from '@fidely-ui/react/icon-button'

import { AppLogo } from '~/components/logo'
import { InfoBadge } from '~/components/nav-item'
import {
  DOCUMENTATION_LINK,
  RESOURCES_LINK,
  SOCIAL_LINK,
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
          width={{ base: '100%', lg: '40%' }}
          mt={{ base: '35px', md: '0px' }}
          color="fg.subtle"
        >
          <AppLogo />

          <Text>
            Built by{' '}
            <Span as="strong" textDecoration="underline" color="fg.default">
              <Link
                href="https://github.com/chimobi-justice"
                target="_blank"
                rel="noopener noreferrer"
              >
                Justice Chimobi
              </Link>
            </Span>{' '}
            and this awesome{' '}
            <Span as="strong" textDecoration="underline" color="fg.default">
              <Link
                href="https://github.com/fidely-ui/fidely-ui/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
              >
                people
              </Link>
            </Span>
          </Text>
        </Stack>

        <Grid
          width={{ base: '100%', lg: '30%' }}
          gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
          }}
          gap={{ base: '10', md: '4' }}
        >
          {/* Documentation */}
          <GridItem>
            <Heading as="h5" textStyle="lg" mb={4} color="fg.default">
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
                    color="fg.subtle"
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
            <Heading as="h5" textStyle="lg" mb={4} color="fg.default">
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
                    color="fg.subtle"
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

      <Divider my="5" />

      <Flex
        justify="space-between"
        align="center"
        width="90%"
        mx="auto"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Text color="fg.muted" size="xs">
          © {new Date().getFullYear()} Fidely UI. All rights reserved
        </Text>

        <HStack gap="4">
          {SOCIAL_LINK.map((link) => (
            <IconButton
              key={link.name}
              size="sm"
              variant="ghost"
              asChild
              title={link.name}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
              >
                <link.icon />
              </Link>
            </IconButton>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}
