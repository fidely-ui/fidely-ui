import Link from 'next/link'
import { Badge } from '@fidely-ui/react/badge'

interface NewComponentBadgeProps {
  href: string
  children: React.ReactNode
}

export const NewComponentBadge = ({
  href,
  children,
}: NewComponentBadgeProps) => {
  return (
    <Link href={href}>
      <Badge
        size="xl"
        bg="orange.8"
        color="orange.11"
        _dark={{ bg: 'orange.5', color: 'orange.10' }}
        p="4.5"
      >
        {children}
      </Badge>
    </Link>
  )
}
