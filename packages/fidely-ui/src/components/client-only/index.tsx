'use client'

import { ClientOnly as ArkClientOnly } from '@ark-ui/react/client-only'
import { ComponentProps } from '@fidely-ui/styled-system/types'

export interface ClientOnlyProps extends ComponentProps<typeof ArkClientOnly> {}

/**
 * Fidely UI ClientOnly
 *
 * Wraps Ark UI's ClientOnly to render content only on the client.
 * Supports a `fallback` for SSR/initial render.
 */
export const ClientOnly = (props: ClientOnlyProps) => {
  return <ArkClientOnly {...props} />
}
