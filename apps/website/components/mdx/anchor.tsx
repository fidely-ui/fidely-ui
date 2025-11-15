import { Box } from '@fidely-ui/react/box'
import Link, { type LinkProps } from 'next/link'

export const Anchor = (props: LinkProps) => {
  return (
    <Box
      asChild
      css={{
        color: 'fg.default',
        textUnderlineOffset: '3px',
        textDecorationThickness: '2px',
        textDecorationColor: 'border.emphasized',
        fontWeight: '500',
      }}
    >
      <Link {...props} />
    </Box>
  )
}
