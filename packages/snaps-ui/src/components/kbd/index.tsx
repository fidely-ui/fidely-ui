import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { ComponentProps } from '@snaps-ui/styled-system/types'
import { kbd } from '@snaps-ui/styled-system/recipes'

export const Kbd = styled(ark.kbd, kbd)

export type KbdProps = ComponentProps<typeof Kbd>
