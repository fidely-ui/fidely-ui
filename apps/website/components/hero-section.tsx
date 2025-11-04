'use client'

import Link from 'next/link'
import { Box } from '@snaps-ui/react/box'
import { Container } from '@snaps-ui/react/container'
import { Center } from '@snaps-ui/react/center'
import { Button } from '@snaps-ui/react/button'
import { Flex } from '@snaps-ui/react/flex'
import { Stack } from '@snaps-ui/react/stack'
import { Typography } from '@snaps-ui/react/typography'
import { SiArkecosystem } from 'react-icons/si'
import { IoLogoReact } from 'react-icons/io5'
import { SiTypescript } from 'react-icons/si'
import { FaTerminal } from 'react-icons/fa'
import { SiFoodpanda } from 'react-icons/si'

const Logos = [
  {
    href: 'https://ark-ui.com/',
    label: 'Ark UI',
    icon: <SiArkecosystem size={32} color="#ff8976" />,
  },
  {
    href: 'https://panda-css.com/',
    label: 'Panda CSS',
    icon: <SiFoodpanda size={32} color="#E5A50A" />,
  },
  {
    href: 'https://react.dev/',
    label: 'React',
    icon: <IoLogoReact size={32} color="#61DAFB" />,
  },
  {
    href: 'https://www.typescriptlang.org/',
    label: 'Typescript',
    icon: <SiTypescript size={32} color="#3178C6" />,
  },
]

export const HeroSection = () => {
  return (
    <Box as={'section'} height={'auto'}>
      <Container maxW="8xl">
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={'15px'}
          width={{ base: '100%', md: '85%' }}
          m={'5rem auto'}
          textAlign={'center'}
        >
          <Typography
            variant="h1"
            fontSize={{ base: '30px', md: '65px' }}
            textAlign="center"
            color={'orange.9'}
            lineHeight={'1.4em'}
          >
            Build modern apps with speed and flexibility
          </Typography>

          <Typography
            variant="subtitle1"
            my={'10px'}
            color={'fg.subtle'}
            textAlign={'center'}
            lineHeight={'1.7em'}
          >
            Snaps UI is a modern UI library with reusable, intuitive components
            that help you ship products faster. Create beautiful, consistent
            interfaces with customizable, production-ready building blocks.
          </Typography>

          <Stack
            flexDirection={{ base: 'column', sm: 'row' }}
            gap="3"
            mt={'25px'}
            mb={'5px'}
          >
            <Button
              variant={'solid'}
              size={'xl'}
              colorPalette={'orange'}
              asChild
              ripple
            >
              <Link href={'/docs/getting-started'}>Get Started</Link>
            </Button>

            <Center
              as="pre"
              minH="13.5"
              shadow="inset"
              bg={'bg.muted'}
              color="fg.default"
              textStyle="sm"
              fontWeight="semibold"
              ps="4"
              pe="6"
              rounded="l2"
              gap="2.5"
            >
              <FaTerminal />
              npm i @snaps-ui/react
            </Center>
          </Stack>

          <Box mt="2rem" opacity={0.7}>
            <Center>
              <Typography variant="body2" fontSize={'xs'} mb={4} mt={1}>
                Powered by
              </Typography>
            </Center>

            <Flex
              alignItems="center"
              justifyContent="center"
              flexWrap={'wrap'}
              gap={8}
              display={'flex'}
            >
              {Logos.map(({ href, label, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex
                    direction="column"
                    alignItems="center"
                    gap={3}
                    _hover={{
                      textDecoration: 'none',
                      transform: 'scale(1.05)',
                    }}
                  >
                    <Box fontSize={{ base: 'sm', md: '2xl' }}>{icon}</Box>
                    <Typography variant="body2" mt={1}>
                      {label}
                    </Typography>
                  </Flex>
                </Link>
              ))}
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
