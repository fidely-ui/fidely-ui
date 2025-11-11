'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Box } from '@snaps-ui/react/box'
import { Button } from '@snaps-ui/react/button'
import { Flex } from '@snaps-ui/react/flex'
import { IconButton } from '@snaps-ui/react/icon-button'
import { CommandInput } from '@snaps-ui/react/command-input'
import { Text } from '@snaps-ui/react/text'
import { Dialog, useDialog } from '@snaps-ui/react/dialog'
import { Portal } from '@snaps-ui/react/portal'
import { FaGithub, FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'

import { ColorModeButton } from '~/components/color-mode-button'
import { AppLogo } from '~/components/logo'
import { Input } from '@snaps-ui/react'

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const dialog = useDialog()

  const navLinks = [
    { href: '/docs/getting-started/installation', label: 'Docs' },
    // { href: '#', label: 'Blogs' },
  ]

  return (
    <Box
      as="nav"
      bg={'bg.default'}
      backdropFilter="blur(10px)"
      shadow={'2xs'}
      px="4"
      py="4"
    >
      <Flex
        w="90%"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <AppLogo />

        {/* Desktop Nav */}
        <Flex
          gap="3"
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}
        >
          <Button variant={'ghost'} ripple asChild>
            <Link
              href={'https://ko-fi.com/snaps_ui'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FcLike /> Sponsor
            </Link>
          </Button>

          <CommandInput
            onOpen={() => dialog.setOpen(true)}
            width={'200px'}
            shortcut="/"
          />

          {navLinks.map(({ href, label }, index: number) => (
            <Text
              key={index}
              transition="color 0.2s ease"
              _hover={{
                color: 'fg.subtle',
                _dark: { color: 'fg.muted' },
              }}
            >
              <Link href={href}>{label}</Link>
            </Text>
          ))}

          <IconButton
            asChild
            aria-label="GitHub Repository"
            variant="ghost"
            size="xs"
          >
            <Link
              href="https://github.com/snaps-ui/snaps-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </Link>
          </IconButton>

          <ColorModeButton />
        </Flex>

        {/* Mobile Menu Button */}
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            asChild
            aria-label="Sponsor Snaps UI"
            variant="plain"
            size="xs"
          >
            <Link
              href="https://ko-fi.com/snaps_ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FcLike />
            </Link>
          </IconButton>
          <ColorModeButton />

          <IconButton
            asChild
            aria-label="GitHub Repository"
            variant="plain"
            size="xs"
          >
            <Link
              href="https://github.com/snaps-ui/snaps-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </Link>
          </IconButton>

          <IconButton
            aria-label="Toggle Menu"
            variant="ghost"
            size="sm"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </IconButton>
        </Box>
      </Flex>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <Box
          mt="3"
          px="4"
          py="3"
          borderRadius="md"
          display={{ base: 'flex', md: 'none' }}
          flexDirection="column"
          gap="3"
        >
          <CommandInput onOpen={() => alert('Open Command')} shortcut="/" />

          {navLinks.map(({ href, label }, index: number) => (
            <Text key={index} onClick={() => setMenuOpen(false)}>
              <Link href={href}>{label}</Link>
            </Text>
          ))}
        </Box>
      )}

      <Dialog.RootProvider value={dialog} size={'lg'}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Input placeholder="search the docs" />
              </Dialog.Header>
              <Dialog.Body>
                <Dialog.Description textAlign={'center'}>
                  nothing found...
                </Dialog.Description>
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.RootProvider>
    </Box>
  )
}
