'use client'

import Link from 'next/link'
import { Image } from '@fidely-ui/react/image'

export const AppLogo = () => {
  return (
    <Link href="/">
      <Image src="/app-logo.png" alt="Fidely UI Logo" w="120px" />
    </Link>
  )
}
