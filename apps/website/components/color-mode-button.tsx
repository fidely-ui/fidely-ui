'use client'

import { ClientOnly } from '@fidely-ui/react/client-only'
import { IconButton } from '@fidely-ui/react/icon-button'
import { Skeleton } from '@fidely-ui/react/skeleton'
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
