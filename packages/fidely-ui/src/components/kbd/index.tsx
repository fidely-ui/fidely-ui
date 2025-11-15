import { ark } from '@ark-ui/react/factory'
import { styled } from '@fidely-ui/styled-system/jsx'
import { ComponentProps } from '@fidely-ui/styled-system/types'
import { kbd } from '@fidely-ui/styled-system/recipes'

export const Kbd = styled(ark.kbd, kbd)

export type KbdProps = ComponentProps<typeof Kbd>
