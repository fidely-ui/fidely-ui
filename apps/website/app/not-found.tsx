import NextImage from 'next/image'
import Link from 'next/link'
import { Box } from '@snaps-ui/react/box'
import { Button } from '@snaps-ui/react/button'
import { Center } from '@snaps-ui/react/center'
import { Flex } from '@snaps-ui/react/flex'
import { Image } from '@snaps-ui/react/image'
import { Heading } from '@snaps-ui/react/heading'
import { Text } from '@snaps-ui/react/text'

export default function NotFound() {
  return (
    <Center height={'90vh'} textAlign={'center'}>
      <Box>
        <Flex
          display={'inline-flex'}
          textAlign={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          mb={'10px'}
        >
          <Image asChild>
            <NextImage
              src="/app-logo.png"
              alt="snaps ui logo"
              width={400}
              height={450}
            />
          </Image>
        </Flex>

        <Box mb={'15px'}>
          <Heading as={'h2'} size={'3xl'} mb={'25px'}>
            404 Page
          </Heading>
          <Text mt={'25px'}>
            Hey, the page you're looking for is currently not available
          </Text>
        </Box>

        <Box mt={'20px'}>
          <Button colorPalette={'orange'} asChild>
            <Link href={'/'}>Back Home</Link>
          </Button>
        </Box>
      </Box>
    </Center>
  )
}
