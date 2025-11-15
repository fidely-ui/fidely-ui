'use client'

import { Field as ArkField } from '@ark-ui/react/field'
import { styled } from '@fidely-ui/styled-system/jsx'
import { ComponentProps } from '@fidely-ui/styled-system/types'
import { input } from '@fidely-ui/styled-system/recipes'

export const Input = styled(ArkField.Input, input)

export type InputProps = ComponentProps<typeof Input>
