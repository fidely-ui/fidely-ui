import Link from 'next/link'
import { Box } from '@fidely-ui/react/box'
import { Button } from '@fidely-ui/react/button'
import { Flex } from '@fidely-ui/react/flex'
import { Stack } from '@fidely-ui/react/stack'
import { Heading } from '@fidely-ui/react/heading'
import { Center } from '@fidely-ui/react/center'
import { Icon } from '@fidely-ui/react/icon'

import {
  HeroCard,
  HeroSwitch,
  HeroSpinner,
  HeroMenu,
  HeroTabs,
  HeroHighlightCard,
  HeroCardPlaylist,
} from '~/components/hero'
import { IoIosStar } from 'react-icons/io'
import { Span } from '@fidely-ui/react'

export const HeroSection = () => {
  return (
    <Box
      as="section"
      aria-labelledby="hero-heading"
      position="relative"
      overflow="auto"
    >
      <Flex
        justify="space-between"
        height={{ base: '100vdh', lg: '90vh' }}
        px="4"
        py="4"
        gap="2"
        width="90%"
        mx="auto"
      >
        {/* left section */}
        <Box width={{ base: '100%', lg: '50%' }}>
          <Flex
            flexDirection="column"
            justify="center"
            height={{ base: '100vdh', lg: '85vh' }}
          >
            <Stack gap="7">
              <Stack gap="4">
                <Heading
                  as="h1"
                  id="hero-heading"
                  textStyle={{ base: '3xl', lg: '7xl' }}
                  lineHeight="1.2em"
                  fontWeight="semibold"
                >
                  Build production ready React apps
                </Heading>
              </Stack>

              <Box color="fg.disabled">
                Fidely UI is a modern design system powered by{' '}
                <Span
                  asChild
                  textDecoration="underline"
                  color="fg.default"
                  mr="2"
                >
                  <a
                    href="https://ark-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ark UI
                  </a>
                </Span>
                and
                <Span
                  asChild
                  textDecoration="underline"
                  color="fg.default"
                  ml="2"
                >
                  <a
                    href="https://panda-css.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Panda CSS,
                  </a>
                </Span>{' '}
                It provides accessible, themeable, and composable components for
                building high-quality web applications.
              </Box>

              <Stack flexDirection={{ base: 'column', md: 'row' }}>
                <Button
                  asChild
                  size={{ base: 'md', lg: 'lg' }}
                  colorPalette="orange"
                >
                  <Link
                    href="/docs/getting-started/installation"
                    aria-label="Getting Started"
                  >
                    Get Started
                  </Link>
                </Button>

                <Button
                  asChild
                  colorPalette="gray"
                  variant="subtle"
                  size={{ base: 'md', lg: 'lg' }}
                >
                  <Link
                    href="https://github.com/fidely-ui/fidely-ui"
                    aria-label="Give a Star on GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Give a Star
                    <Icon size="lg" colorPalette="amber" color="colorPalette.9">
                      <IoIosStar />
                    </Icon>
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Box>

        {/* right section */}
        <Box
          width={'50%'}
          display={{ base: 'none', lg: 'block' }}
          height="100%"
          position="absolute"
          top="0"
          right="0"
        >
          <Stack gap="2">
            <Flex gap="3" justify="space-between" minH="auto">
              <HeroCard />
              <HeroSwitch />
              <HeroSpinner />
            </Flex>

            <Center py="6">
              <Flex gap="4" width="80%">
                <HeroCardPlaylist />
                <HeroMenu />
              </Flex>
            </Center>

            <Flex justify="flex-end" mb="2">
              <HeroTabs />
            </Flex>

            <Flex justify="center" mt="8">
              <HeroHighlightCard />
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}
