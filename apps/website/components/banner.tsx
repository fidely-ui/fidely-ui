import Link from 'next/link'
import { Box } from '@fidely-ui/react/box'
import { Center } from '@fidely-ui/react/center'
import { Text } from '@fidely-ui/react/text'
// import { Badge } from '@fidely-ui/react/badge'
import { Button } from '@fidely-ui/react'

export const Banner = () => {
  return (
    <Box bg='orange.9' p='2' w='full'>
      <Center>
        <Text fontWeight='bold' color='white'>
          You are viewing the older version of Fidely UI for latest visit
          <Button asChild size='xs' ml='4'>
            <Link 
              href='https://fidely-ui.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >Fidely UI V2</Link>
          </Button>
        </Text>
      </Center>
    </Box>
  )
}
