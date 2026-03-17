import Link from 'next/link'
import { Badge } from '@fidely-ui/react/badge'
import { Box } from '@fidely-ui/react/box'
import { Grid, GridItem } from '@fidely-ui/react/grid'
import { Icon } from '@fidely-ui/react/icon'
import { Stack } from '@fidely-ui/react/stack'
import { Text } from '@fidely-ui/react/text'

import { RiNextjsFill } from 'react-icons/ri'
import { SiFoodpanda, SiReactrouter, SiVite, SiLaravel } from 'react-icons/si'

const frameworks = [
  {
    id: 1,
    name: 'Next.js (App Router)',
    description:
      'Optimized for the App Router with server components and layouts.',
    url: 'frameworks/next-js-app',
    logo: <RiNextjsFill />,
    comingSoon: false,
    recommended: true,
  },
  {
    id: 2,
    name: 'Next.js (Pages Router)',
    description: 'For projects using the classic pages/ directory.',
    url: 'frameworks/next-js-page',
    logo: <RiNextjsFill />,
    comingSoon: false,
    recommended: true,
  },
  {
    id: 3,
    name: 'Vite + TypeScript',
    description: 'Fast local development with Vite and TypeScript.',
    url: 'frameworks/vite-ts',
    logo: <SiVite />,
    comingSoon: false,
    recommended: true,
  },
  {
    id: 4,
    name: 'Vite + JavaScript',
    description: 'Fast local development with Vite and JSX.',
    url: 'frameworks/vite-js',
    logo: <SiVite />,
    comingSoon: false,
    recommended: true,
  },
  {
    id: 5,
    name: 'React Router',
    description: 'Client-side routing with full control over app structure.',
    url: 'frameworks/react-router',
    logo: <SiReactrouter />,
    comingSoon: false,
  },
  {
    id: 6,
    name: 'Laravel',
    description: 'Use Fidely UI in Lavavel + Inertialjs + React apps',
    url: 'frameworks/laravel',
    logo: <SiLaravel />,
    comingSoon: false,
  },
  {
    id: 7,
    name: 'Preset (Panda CSS)',
    description:
      'Use Fidely UI design tokens, recipes, and utilities without React components.',
    url: 'frameworks/preset',
    logo: <SiFoodpanda />,
    comingSoon: false,
  },
]

export const Frameworks = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={{ base: '2', md: '3' }}
    >
      {frameworks.map((framework) => {
        const Card = (
          <Box
            css={{
              h: '100%',
              px: '6',
              py: '5',
              position: 'relative',
              borderRadius: 'xl',
              border: '1px solid',
              borderColor: 'border.default',
              boxShadow: 'sm',
              transition: 'all 0.2s',
              _hover: framework.comingSoon
                ? {}
                : {
                    borderColor: 'border.emphasized',
                    boxShadow: 'md',
                  },
              opacity: framework.comingSoon ? 0.6 : 1,
              cursor: framework.comingSoon ? 'not-allowed' : 'pointer',
            }}
          >
            {framework.recommended && (
              <Box position="absolute" top="0" right="0">
                <Badge size="sm" colorPalette="amber">
                  RECOMMENDED
                </Badge>
              </Box>
            )}

            <Stack gap="3" align="center" textAlign="center">
              <Icon boxSize="12">{framework.logo}</Icon>

              <Text fontWeight="semibold">{framework.name}</Text>

              <Text fontSize="sm" color="fg.muted">
                {framework.description}
              </Text>

              {framework.comingSoon && (
                <Text fontSize="xs" color="fg.subtle">
                  Coming soon
                </Text>
              )}
            </Stack>
          </Box>
        )

        return (
          <GridItem key={framework.id}>
            {framework.comingSoon ? (
              Card
            ) : (
              <Link
                href={`/docs/${framework.url}`}
                style={{ textDecoration: 'none' }}
              >
                {Card}
              </Link>
            )}
          </GridItem>
        )
      })}
    </Grid>
  )
}
