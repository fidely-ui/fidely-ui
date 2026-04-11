'use client'

import { useState } from 'react'
import {
  Button,
  Card,
  Center,
  Field,
  PinInput,
  Span,
  Stack,
  Text,
} from '@fidely-ui/react'

export const PinInputExample = () => {
  const [value, setValue] = useState(['', '', '', '', '', ''])
  const isDisabled = value.join('').length != 6

  return (
    <Center>
      <Card.Root width={{ base: 'full', md: '500px' }}>
        <Card.Body>
          <Stack gap="4">
            <Center>
              <Stack align="center" gap="2">
                <Text textStyle="2xl" fontWeight="semibold">
                  Please check your email
                </Text>

                <Text size="sm" color="fg.muted" textAlign="center">
                  We've sent a code to{' '}
                  <Text as="a" fontWeight="medium" color="fg.default">
                    hello@company.com
                  </Text>
                </Text>
              </Stack>
            </Center>
            <Stack gap="5" mt="3">
              <Field.Root>
                <Center>
                  <PinInput.Root
                    size="lg"
                    value={value}
                    onValueChange={(e) => setValue(e.value)}
                  >
                    <PinInput.Control>
                      <PinInput.Group>
                        <PinInput.Input index={0} />
                        <PinInput.Input index={1} />
                        <PinInput.Input index={2} />
                      </PinInput.Group>
                      <PinInput.Separator />
                      <PinInput.Group>
                        <PinInput.Input index={3} />
                        <PinInput.Input index={4} />
                        <PinInput.Input index={5} />
                      </PinInput.Group>
                    </PinInput.Control>
                    <PinInput.HiddenInput />
                  </PinInput.Root>
                </Center>
              </Field.Root>
              <Button fullWidth type="submit" disabled={isDisabled}>
                Continue
              </Button>
              <Center>
                <Text size="sm" color="fg.muted">
                  Didn't receive an email?{' '}
                  <Span color="colorPalette.default">
                    <a>Resend</a>
                  </Span>
                </Text>
              </Center>
            </Stack>
          </Stack>
        </Card.Body>
      </Card.Root>
    </Center>
  )
}
