import Image from 'next/image'
import Link from 'next/link'
import { Box } from '@fidely-ui/react/box'
import { Button } from '@fidely-ui/react/button'
import { Flex } from '@fidely-ui/react/flex'
import { Stack } from '@fidely-ui/react/stack'
import { Heading } from '@fidely-ui/react/heading'
import { Text } from '@fidely-ui/react/text'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { NewComponentBadge } from '~/components/new-component-badge'

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
        <Box width={{ base: '100%', lg: '50%' }}>
          <Flex
            flexDirection="column"
            justify="center"
            height={{ base: '100vdh', lg: '85vh' }}
          >
            <Stack gap="7">
              <NewComponentBadge href="https://fidely-ui.vercel.app/">
                Fidely UI v2.0.0{' '}
                <FaExternalLinkAlt style={{ marginLeft: '6px' }} />
              </NewComponentBadge>
              <Stack gap="4">
                <Heading
                  as="h1"
                  id="hero-heading"
                  size={{ base: '3xl', lg: '5xl' }}
                  colorPalette="orange"
                  color="colorPalette.default"
                  lineHeight="1.4em"
                >
                  Build modern apps with speed and flexibility
                </Heading>

                <Heading
                  as="h2"
                  size={{ base: '2xl', lg: '4xl' }}
                  color="fg.muted"
                >
                  UI library for modern React apps
                </Heading>
              </Stack>

              <Text color="fg.disabled" size={{ base: 'md', lg: 'lg' }}>
                Fidely UI is a modern, beautifully crafted React design system
                powered by{' '}
                <Text
                  as="strong"
                  colorPalette="orange"
                  color="colorPalette.default"
                >
                  <a
                    href="https://ark-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ark UI
                  </a>
                </Text>{' '}
                and{' '}
                <Text
                  as="strong"
                  colorPalette="orange"
                  color="colorPalette.default"
                >
                  <a
                    href="https://panda-css.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Panda CSS
                  </a>
                </Text>
                , delivering accessible and themeable components for building
                exceptional web apps
              </Text>

              <Stack flexDirection={{ base: 'column', md: 'row' }}>
                <Button
                  asChild
                  size={{ base: 'md', lg: 'lg' }}
                  colorPalette="orange"
                >
                  <Link
                    href="/docs/getting-started/installation"
                    aria-label="Getting Started with Fidely UI documentation"
                  >
                    Get Started
                  </Link>
                </Button>

                {/* <Button
                  asChild
                  colorPalette="gray"
                  variant="subtle"
                  size={{ base: 'md', lg: 'lg' }}
                >
                  <Link
                    href="/docs/getting-started/installation"
                    aria-label="Explore Fidely UI blocks coming soon"
                  >
                    Explore Blocks
                  </Link>
                </Button> */}
              </Stack>
            </Stack>
          </Flex>
        </Box>

        <Box
          aria-hidden="true"
          display={{ base: 'none', lg: 'block' }}
          width="50%"
          height="100%"
          position="absolute"
          top="0"
          right="0"
          clipPath="polygon(12% 0, 100% 0, 100% 100%, 0 100%)"
          overflow="hidden"
          zIndex="10"
        >
          <Image
            src="/hero-showcase.png"
            alt="hero image showcase"
            fill
            priority
            sizes="50vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=="
            style={{
              objectFit: 'cover',
              objectPosition: 'left',
            }}
          />

          {/* overlay */}
          <Box
            position="absolute"
            inset="0"
            bg={{
              base: 'bg.emphasized/60',
              _dark: 'bg.emphasized/30',
            }}
          />
        </Box>
      </Flex>
    </Box>
  )
}
