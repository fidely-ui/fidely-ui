import { Button } from '@fidely-ui/react/button'

export const ButtonAsLink = () => {
  return (
    <Button asChild>
      <a href="https://fidely-ui.vercel.app" target="_blank">
        Fidely UI
      </a>
    </Button>
  )
}
