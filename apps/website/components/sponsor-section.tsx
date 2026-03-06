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
import { IoIosStar } from 'react-icons/io'

export const SponsorSection = () => {
  return (
    <Box as="section" px="4" py="4">
      <Flex
        w="90%"
        m="4.5rem auto"
        alignItems="flex-start"
        gap="4"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box width={{ base: '100%', lg: '35%' }}>
          <Stack gap="3">
            <Heading
              colorPalette="orange"
              color="colorPalette.default"
              fontWeight="semibold"
              size="3xl"
            >
              Support Fidely UI development
            </Heading>
            <Text lineHeight="1.8em" color="fg.muted" size="md">
              You can support Fidely UI development through{' '}
              <Text asChild colorPalette="orange" color="colorPalette.default">
                <Link
                  href="https://ko-fi.com/fidely_ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ko-Fi
                </Link>
              </Text>
              . All funds are used to improve the Fidely UI and create new
              features and components.
            </Text>
          </Stack>
        </Box>

        <Box>
          <Center gap="3">
            <Link
              href="https://ko-fi.com/fidely_ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Paper
                bg="transparent"
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
                      width="300"
                      height="200"
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
        </Box>
      </Flex>

      <Flex
        w="90%"
        m="4.5rem auto"
        alignItems="flex-start"
        gap="4"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box width={{ base: '100%', lg: '35%' }}>
          <Stack gap="3">
            <Text lineHeight="1.8em" color="fg.muted" size="md">
              Give us a star on GitHub, it helps the project grow and reach more
              audience.
            </Text>

            <Text
              color="fg.muted"
              size="md"
              textDecoration="underline"
              display="flex"
              alignItems="center"
              gap="1"
              asChild
            >
              <Link
                href="https://github.com/fidely-ui/fidely-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size="lg" colorPalette="yellow" color="colorPalette.11">
                  <IoIosStar />
                </Icon>
                Star on GitHub
              </Link>
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}
