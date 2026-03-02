import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@fidely-ui/react/button'
import { Card } from '@fidely-ui/react/card'
import { Flex } from '@fidely-ui/react/flex'
import { Grid, GridItem } from '@fidely-ui/react/grid'
import { Heading } from '@fidely-ui/react/heading'
import { Text } from '@fidely-ui/react/text'
import { Container } from '~/styled-system/jsx'

import { projects } from '~/.velite'

export const metadata: Metadata = {
  title: 'Showcase',
  description:
    'Explore beautiful apps and websites built with Fidely UI by developers and companies.',
  openGraph: {
    title: 'Showcase',
    description:
      'Discover production-ready apps, dashboards, and websites powered by Fidely UI.',
    images: '/og.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Showcase',
    description:
      'Discover production-ready apps, dashboards, and websites powered by Fidely UI.',
    images: '/og.png',
  },
}

export default function ShowcaseProjectPage() {
  return (
    <Container maxW="7xl" my="7rem" id="projects" as="section">
      <Flex direction="column" textAlign="center" gap="4" mb="12">
        <Heading
          size={{ base: '3xl', md: '6xl' }}
          fontWeight="bold"
          colorPalette="orange"
          color="colorPalette.default"
        >
          Built with Fidely UI
        </Heading>
        <Text color="fg.muted">
          Discover products and experiences created by the community.
        </Text>
      </Flex>

      <Grid
        gridTemplateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={{ base: '2', md: '4' }}
      >
        {projects.map((link) => (
          <GridItem height="min-content" key={link.name}>
            <Link href={link.url} target="_blank" rel="noopener noreferer">
              <Card.Root
                _hover={{
                  colorPalette: 'gray',
                  bg: 'colorPalette.alpha3',
                }}
              >
                <Image
                  src={link.image}
                  alt={link.name}
                  width={400}
                  height={200}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsn9pfDwAFogI0qPkC4wAAAABJRU5ErkJggg=="
                />
                <Card.Header>
                  <Card.Title>{link.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Description>{link.description}</Card.Description>
                </Card.Body>
              </Card.Root>
            </Link>
          </GridItem>
        ))}
      </Grid>

      <Flex
        direction="column"
        align="center"
        textAlign="center"
        py="20"
        px="6"
        gap="6"
      >
        <Heading size="2xl">Start building with Fidely UI today</Heading>

        <Button asChild size="lg" colorPalette="orange" variant="outline">
          <Link href="/docs/getting-started/installation">
            Get Started
          </Link>
            Get Started
          </Link>
        </Button>
      </Flex>
    </Container>
  )
}
