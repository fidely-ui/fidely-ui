'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Box } from '@fidely-ui/react/box'
import { Button } from '@fidely-ui/react/button'
import { Flex } from '@fidely-ui/react/flex'
import { IconButton } from '@fidely-ui/react/icon-button'
import { Text } from '@fidely-ui/react/text'
import { useDialog } from '@fidely-ui/react/dialog'
import { Stack } from '@fidely-ui/react/stack'
import { FaGithub, FaBars, FaDiscord } from 'react-icons/fa6'
import { FcLike } from 'react-icons/fc'

import { ColorModeButton } from '~/components/color-mode-button'
import { Drawer } from '~/components/drawer'
import { AppLogo } from '~/components/logo'
import { NavItem } from '~/components/nav-item'

export const SiteNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev)
  const closeDrawer = () => setIsDrawerOpen(false)

  const dialog = useDialog()

  const navLinks = [
    { href: '/docs/getting-started/introduction', label: 'Docs' },
    { href: '/showcase', label: 'Showcase' },
    { href: '/docs/components/accordion', label: 'Components' },
  ]

  return (
    <Box as="nav" px="4" py="4">
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
          {navLinks.map(({ href, label }, index) => (
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

          <Button size="sm" variant="ghost" asChild>
            <Link
              href="https://ko-fi.com/fidely_ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FcLike /> Sponsor
            </Link>
          </Button>

          <IconButton
            asChild
            aria-label="GitHub"
            variant="ghost"
            size="xs"
            title="Github"
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
            asChild
            aria-label="Join Discord"
            variant="ghost"
            size="xs"
            title="Github"
          >
            <Link
              href="https://discord.com/invite/7ru3tEjkcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={18} />
            </Link>
          </IconButton>

          <ColorModeButton />
        </Flex>

        {/* Mobile Menu Button */}
        <Box display={{ base: 'flex', md: 'none' }} alignItems="center">
          <IconButton
            size="sm"
            variant="ghost"
            aria-label="Sponsor Fidely UI"
            asChild
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
            asChild
            aria-label="Join Discord"
            variant="ghost"
            size="xs"
            title="Github"
          >
            <Link
              href="https://discord.com/invite/7ru3tEjkcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={18} />
            </Link>
          </IconButton>

          <IconButton
            aria-label="Toggle Menu"
            variant="ghost"
            size="sm"
            onClick={toggleDrawer}
          >
            <FaBars size={18} />
          </IconButton>
        </Box>
      </Flex>

      {/* Mobile Menu Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        isInput={false}
        closeDrawer={closeDrawer}
        commandOpen={() => dialog.setOpen(true)}
      >
        <SiteMobileLinks closeDrawer={closeDrawer} />
      </Drawer>
    </Box>
  )
}

interface SiteMobileLinksProps {
  closeDrawer: () => void
}

const SiteMobileLinks = ({ closeDrawer }: SiteMobileLinksProps) => {
  return (
    <Stack mt="3">
      <Stack gap="8">
        <NavItem
          href="/docs/getting-started/installation"
          label="Documentation"
          closeDrawer={closeDrawer}
          fontSize="18px"
        />

        <NavItem
          href="/docs/components/accordion"
          label="Components"
          closeDrawer={closeDrawer}
          fontSize="18px"
        />
        <NavItem
          href="/showcase"
          label="Showcase"
          closeDrawer={closeDrawer}
          fontSize="18px"
        />
      </Stack>
    </Stack>
  )
}
