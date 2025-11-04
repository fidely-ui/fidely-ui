'use client'

import { Button } from '@snaps-ui/react/button'
import { Box } from '@snaps-ui/react/box'
import { Flex } from '@snaps-ui/react/flex'
import { Field } from '@snaps-ui/react/field'
import { Input } from '@snaps-ui/react/input'
import { Paper } from '@snaps-ui/react/paper'
import { Stack } from '@snaps-ui/react/stack'
import { Typography } from '@snaps-ui/react/typography'
import { FaGithub, FaGoogle } from 'react-icons/fa6'

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
        <Typography variant={'h5'}>Snaps UI</Typography>
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
              <Typography variant={'subtitle1'}>Create an account</Typography>
              <Typography variant={'subtitle2'}>
                Enter your details below to create your account
              </Typography>
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

                <Typography
                  variant={'subtitle1'}
                  textStyle={'sm'}
                  textAlign={'center'}
                >
                  Or continue with
                </Typography>

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
