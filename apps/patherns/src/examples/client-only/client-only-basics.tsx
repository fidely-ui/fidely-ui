import { ClientOnly } from '@fidely-ui/react/client-only'

export const ClientOnlyBasics = () => {
  return (
    <ClientOnly>
      <div>This content is only rendered on the client side.</div>
    </ClientOnly>
  )
}
