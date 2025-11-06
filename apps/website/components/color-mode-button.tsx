'use client'

import { ClientOnly } from '@snaps-ui/react/client-only'
import { IconButton } from '@snaps-ui/react/icon-button'
import { Skeleton } from '@snaps-ui/react/skeleton'
import { IoSunnyOutline } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa6'

import { useToggleTheme } from '~/hooks/useToggleTheme'

export const ColorModeButton = () => {
  const { theme, toggleTheme } = useToggleTheme()

  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleTheme}
        size="xs"
        color="inherit"
        variant="ghost"
      >
        {theme === 'light' ? (
          <IoSunnyOutline size={'17px'} />
        ) : (
          <FaMoon size={'17px'} />
        )}
      </IconButton>
    </ClientOnly>
  )
}
