'use client'

import Link from 'next/link'
import * as React from 'react'
import { Box } from '@snaps-ui/react/box'
import { Flex } from '@snaps-ui/react/flex'
import { Stack } from '@snaps-ui/react/stack'
import { Typography } from '@snaps-ui/react/typography'
import { Badge as SnapsBadge } from '@snaps-ui/react/badge'

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
          <Typography variant={'body1'} color={'fg.default'}>
            Getting Started
          </Typography>
          <Link href="/docs/getting-started" style={{ marginLeft: '6px' }}>
            <Typography variant={'body2'} color={'fg.muted'} as={'span'}>
              Installation
            </Typography>
          </Link>
        </Stack>

        <Stack gap="3">
          <Typography variant={'body1'} color={'fg.default'}>
            Theming
          </Typography>
          <Link href="/docs/theming" style={{ marginLeft: '6px' }}>
            <Typography variant={'body2'} color={'fg.muted'} as={'span'}>
              customization
            </Typography>
          </Link>
        </Stack>

        <Stack gap="3">
          {asideComponentLinks.map((section, index: number) => (
            <React.Fragment key={index}>
              <Typography variant={'body2'} fontSize={'14px'}>
                {section.section}
              </Typography>

              {section.items.map((item) => (
                <Link
                  href={`/docs/components/${item.linkUrl}`}
                  key={item.name}
                  style={{
                    marginLeft: '6px',
                  }}
                >
                  <Typography
                    variant={'body2'}
                    color={'fg.muted'}
                    as={'span'}
                    fontSize={'13px'}
                  >
                    {item.name} {item.new ? <Badge /> : ''}
                  </Typography>
                </Link>
              ))}
            </React.Fragment>
          ))}
        </Stack>

        <Stack gap="3">
          {asideUtilLinks.map((section, index: number) => (
            <React.Fragment key={index}>
              <Typography variant={'body2'} fontSize={'14px'}>
                {section.section}
              </Typography>

              {section.items.map((item) => (
                <Link
                  href={`/docs/utilities/${item.linkUrl}`}
                  key={item.name}
                  style={{
                    marginLeft: '6px',
                  }}
                >
                  <Typography
                    variant={'body2'}
                    color={'fg.muted'}
                    as={'span'}
                    fontSize={'13px'}
                  >
                    {item.name} {item.new ? <Badge /> : ''}
                  </Typography>
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
    <SnapsBadge colorPalette={'accent'} size={'sm'}>
      Beta
    </SnapsBadge>
  )
}
