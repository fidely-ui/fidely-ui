import Link from 'next/link'
import { Box } from '@fidely-ui/react/box'
import { Button } from '@fidely-ui/react/button'
import { Center } from '@fidely-ui/react/center'
import { Flex } from '@fidely-ui/react/flex'
import { Heading } from '@fidely-ui/react/heading'
import { Text } from '@fidely-ui/react/text'
import { Image } from '@fidely-ui/react/image'

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
          <Image src="/app-logo.png" alt="Fidely  UI Logo" w="350px" />
        </Flex>

        <Box mb={'15px'}>
          <Heading as={'h2'} size={'3xl'} mb={'25px'}>
            404 Page
          </Heading>
          <Text mt={'25px'}>
            {`Hey, the page you're looking for is currently not available`}
          </Text>
        </Box>

        <Box mt={'20px'}>
          <Button colorPalette={'orange'} asChild>
            <Link href="/">Back Home</Link>
          </Button>
        </Box>
      </Box>
    </Center>
  )
}
