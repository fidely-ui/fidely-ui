'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Box } from '@fidely-ui/react/box'
import { Button } from '@fidely-ui/react/button'
import { Flex } from '@fidely-ui/react/flex'
import { IconButton } from '@fidely-ui/react/icon-button'
import { CommandInput } from '@fidely-ui/react/command-input'
import { Text } from '@fidely-ui/react/text'
import { Dialog, useDialog } from '@fidely-ui/react/dialog'
import { Portal } from '@fidely-ui/react/portal'
import { Badge } from '@fidely-ui/react/badge'
import { Input } from '@fidely-ui/react/input'
import { Span } from '@fidely-ui/react/span'
import { Stack } from '@fidely-ui/react/stack'

import { FaGithub, FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'

import { ColorModeButton } from '~/components/color-mode-button'
import { AppLogo } from '~/components/logo'
import {
  asideComponentLinks,
  asideUtilLinks,
} from '~/constant/aside-component-links'

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
              href={'https://ko-fi.com/fidely_ui'}
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
              href="https://github.com/fidely-ui/fidely-ui"
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
            aria-label="Sponsor Fidely UI"
            variant="plain"
            size="xs"
          >
            <Link
              href="https://ko-fi.com/fidely_ui"
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
              href="https://github.com/fidely-ui/fidely-ui"
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
          <CommandInput onOpen={() => dialog.setOpen(true)} shortcut="/" />

          <Stack gap="6">
            <Stack gap="3">
              <Text color={'fg.default'}>Getting Started</Text>
              <Link
                href="/docs/getting-started/introduction"
                style={{ marginLeft: '6px' }}
              >
                <Span color={'fg.muted'} fontSize={'13px'}>
                  Introduction
                </Span>
              </Link>

              <Link
                href="/docs/getting-started/installation"
                style={{ marginLeft: '6px' }}
              >
                <Span color={'fg.muted'} fontSize={'13px'}>
                  Installation
                </Span>
              </Link>
            </Stack>

            <Stack gap="3">
              <Text color={'fg.default'} fontSize={'14px'}>
                Theming
              </Text>
              <Link href="/docs/theming" style={{ marginLeft: '6px' }}>
                <Span color={'fg.muted'} fontSize={'13px'}>
                  customization
                </Span>
              </Link>
            </Stack>

            <Stack gap="3">
              {asideComponentLinks.map((section, index: number) => (
                <React.Fragment key={index}>
                  <Text fontSize={'14px'}>{section.section}</Text>

                  {section.items.map((item) => (
                    <Link
                      href={`/docs/components/${item.linkUrl}`}
                      key={item.name}
                      style={{
                        marginLeft: '6px',
                      }}
                    >
                      <Span color={'fg.muted'} fontSize={'13px'}>
                        {item.name} {item.new ? <Badge /> : ''}
                      </Span>
                    </Link>
                  ))}
                </React.Fragment>
              ))}
            </Stack>

            <Stack gap="3">
              {asideUtilLinks.map((section, index: number) => (
                <React.Fragment key={index}>
                  <Text fontSize={'14px'}>{section.section}</Text>

                  {section.items.map((item) => (
                    <Link
                      href={`/docs/utilities/${item.linkUrl}`}
                      key={item.name}
                      style={{
                        marginLeft: '6px',
                      }}
                    >
                      <Span color={'fg.muted'} fontSize={'13px'}>
                        {item.name} {item.new ? <Badge /> : ''}
                      </Span>
                    </Link>
                  ))}
                </React.Fragment>
              ))}
            </Stack>
          </Stack>
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
