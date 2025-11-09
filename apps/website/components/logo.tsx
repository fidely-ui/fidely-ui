'use client'

import Link from 'next/link'
import { Image } from '@snaps-ui/react/image'

export const AppLogo = () => {
  return (
    <Link href="/">
      <Image src="/app-logo.png" alt="Snaps UI Logo" w="120px" />
    </Link>
  )
}
