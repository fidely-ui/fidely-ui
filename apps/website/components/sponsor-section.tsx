import Link from 'next/link'
import Image from 'next/image'
import { Box } from '@fidely-ui/react/box'
import { Flex } from '@fidely-ui/react/flex'
import { Paper } from '@fidely-ui/react/paper'
import { Center } from '@fidely-ui/react/center'
import { Heading } from '@fidely-ui/react/heading'
import { Stack } from '@fidely-ui/react/stack'
import { Text } from '@fidely-ui/react/text'
import { Icon } from '@fidely-ui/react/icon'
import { FcLike } from 'react-icons/fc'

export const SponsorSection = () => {
  return (
    <Box as="section" px="4" py="6">
      <Flex
        w="90%"
        m="4.5rem auto"
        alignItems="flex-start"
        gap="4"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box width={{ base: '100%', lg: '35%' }}>
          <Stack gap="4">
            <Heading
              as="h4"
              textStyle={{ base: '2xl', md: '4xl' }}
              fontWeight="semibold"
              display="flex"
              alignItems="center"
              gap="2"
            >
              Support Fidely UI{' '}
              <Icon color="red.10">
                <FcLike />
              </Icon>
            </Heading>

            <Text color={'fg.muted'}>
              Using Fidely UI for freelance work, for-profit projects, or fun
              projects? Your contributions will help make Fidely UI better.
            </Text>
          </Stack>
        </Box>

        <Center gap="3">
          <Link
            href="https://ko-fi.com/fidely_ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Paper
              transition="all 0.2s ease"
              _hover={{
                transform: 'translateY(-4px)',
                shadow: 'lg',
                bg: 'bg.subtle',
              }}
            >
              <Center>
                <Stack>
                  <Image
                    src="/sponsor-1.png"
                    width={300}
                    height={200}
                    alt="kofi logo"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=="
                  />
                  <Text
                    textAlign="center"
                    size="2xl"
                    fontWeight="semibold"
                    colorPalette="orange"
                    color="colorPalette.default"
                  >
                    Ko-Fi
                  </Text>
                </Stack>
              </Center>
            </Paper>
          </Link>
        </Center>
      </Flex>
    </Box>
  )
}
