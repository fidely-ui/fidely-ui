'use client'

import Link from 'next/link'
import * as React from 'react'
import { Box } from '@snaps-ui/react/box'
import { Flex } from '@snaps-ui/react/flex'
import { Stack } from '@snaps-ui/react/stack'
import { Text } from '@snaps-ui/react/text'
import { Badge as SnapsBadge } from '@snaps-ui/react/badge'
import { Span } from '@snaps-ui/react/span'

import {
  asideComponentLinks,
  asideUtilLinks,
} from '~/constant/aside-component-links'

export const DocsPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex height="100vh" bg="bg.default">
      <Box
        as="aside"
        w={{ base: '64', md: '72' }}
        p="6"
        borderRight="1px solid"
        borderColor="border.default"
        position="sticky"
        top="0"
        h="100vh"
        overflowY="auto"
        display={{ base: 'none', md: 'block' }}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box as="main" flex="1" p={{ base: '2', md: '10' }} overflowY="auto">
        {children}
      </Box>
    </Flex>
  )
}

function Sidebar() {
  return (
    <Box
      w={{ base: '64', md: '72' }}
      p="6"
      borderRight="1px solid"
      borderColor="border.default"
      position="sticky"
      top="0"
      h="100vh"
      overflowY="auto"
    >
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
  )
}

const Badge = () => {
  return (
    <SnapsBadge colorPalette={'orange'} size={'sm'}>
      WIP
    </SnapsBadge>
  )
}
