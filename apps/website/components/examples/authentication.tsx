'use client'

import { Button } from '@fidely-ui/react/button'
import { Box } from '@fidely-ui/react/box'
import { Flex } from '@fidely-ui/react/flex'
import { Field } from '@fidely-ui/react/field'
import { Input } from '@fidely-ui/react/input'
import { Paper } from '@fidely-ui/react/paper'
import { Stack } from '@fidely-ui/react/stack'
import { Text } from '@fidely-ui/react/text'
import { Heading } from '@fidely-ui/react/heading'
import { FaGithub, FaGoogle } from 'react-icons/fa6'
import { Divider } from '@fidely-ui/react/divider'

export const AuthenticationExample = () => {
  return (
    <Flex
      width={'full'}
      height={{ base: 'auto', md: '100vh' }}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box
        width={'50%'}
        bg={'orange.4'}
        padding={'10px'}
        display={{ base: 'none', md: 'block' }}
      >
        <Heading as={'h1'} textStyle={'3xl'}>
          Fidely UI
        </Heading>
      </Box>

      <Box
        width={{ base: '100%', md: '50%' }}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box width={{ base: '100%', md: '60%' }}>
          <Paper width={'full'}>
            <Stack gap={2} mb={'15px'} textAlign={'center'}>
              <Heading as={'h4'} textStyle={'xl'}>
                Create an account
              </Heading>
              <Text textStyle={'md'}>
                Enter your details below to create your account
              </Text>
            </Stack>

            <Stack gap={5}>
              <Field.Root>
                <Field.Label>
                  Email <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  placeholder="mail@example.com"
                  variant={'subtle'}
                  _focus={{
                    borderColor: 'orange.9',
                    boxShadow: 'none',
                  }}
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Password</Field.Label>
                <Input
                  placeholder="*********"
                  variant={'subtle'}
                  _focus={{
                    borderColor: 'orange.9',
                    boxShadow: 'none',
                  }}
                />
              </Field.Root>

              <Stack gap={3}>
                <Button colorPalette={'orange'}>Sign up with Email </Button>

                <Flex align={'center'} justify={'center'} gap={'2'}>
                  <Divider color={'gray'} width={'25%'} />
                  <Text textStyle={'sm'} textAlign={'center'}>
                    Or continue with
                  </Text>
                  <Divider color={'gray'} width={'25%'} />
                </Flex>

                <Stack gap={3}>
                  <Button variant={'outline'}>
                    <FaGoogle /> Google
                  </Button>
                  <Button variant={'outline'}>
                    <FaGithub /> Github
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Flex>
  )
}
