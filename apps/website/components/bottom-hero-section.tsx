import { Card } from '@fidely-ui/react'
import { Box } from '@fidely-ui/react/box'
import { Flex } from '@fidely-ui/react/flex'
import { Grid, GridItem } from '@fidely-ui/react/grid'
import { Heading } from '@fidely-ui/react/heading'
import { Icon } from '@fidely-ui/react/icon'
import { Stack } from '@fidely-ui/react/stack'
import { Text } from '@fidely-ui/react/text'
import { FaAffiliatetheme } from 'react-icons/fa6'
import { LuHeartHandshake } from 'react-icons/lu'
import { MdAccessibilityNew, MdOutlinePalette } from 'react-icons/md'

export const BottomHeroSection = () => {
  return (
    <Box as="section" px="4" py="8">
      <Stack gap="3" mb="6" w="90%" mx="auto">
        <Heading
          as="h4"
          textStyle={{ base: '2xl', md: '3xl' }}
          fontWeight="semibold"
        >
          Why build with Fidely UI?
        </Heading>
        <Text color="fg.muted" maxW="600px">
          A delightful developer experience with production ready components,
          built for performance, accessibility, and customization.
        </Text>
      </Stack>

      <Grid
        w="90%"
        mx="auto"
        as="ul"
        mt="4.5"
        gap="6"
        mb="2.5"
        gridTemplateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {/* Composable */}
        <FeatureItem
          icon={<FaAffiliatetheme />}
          title="Composable System"
          description="Styled components designed to compose seamlessly across your app."
        />

        {/* Accessibility */}
        <FeatureItem
          icon={<MdAccessibilityNew />}
          title="Built-in Accessibility"
          description="Powered by Ark UI, every component follows WAI-ARIA patterns and keyboard interaction by default."
        />

        {/* Panda / CSS-in-JS */}
        <FeatureItem
          icon={<MdOutlinePalette />}
          title="CSS-in-JS at Build Time"
          description="Styled with Panda CSS for zero-runtime styling, atomic output, and predictable performance."
        />

        {/* Production */}
        <FeatureItem
          icon={<LuHeartHandshake />}
          title="Production Ready"
          description="Build beautiful UIs with ease, You always have full control over how they look and behave"
        />
      </Grid>
    </Box>
  )
}

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <GridItem as="li" height="min-content">
      <Card.Root>
        <Card.Body>
          <Stack gap="3">
            <Flex align="center" gap="3">
              <Box
                bg="bg.emphasized"
                boxSize="10"
                display="flex"
                justifyContent="center"
                alignItems="center"
                rounded="s1"
              >
                <Icon colorPalette="orange" color="colorPalette.default">
                  {icon}
                </Icon>
              </Box>
              <Heading as="h3" size="md">
                {title}
              </Heading>
            </Flex>

            <Text color="fg.muted" size="sm">
              {description}
            </Text>
          </Stack>
        </Card.Body>
      </Card.Root>
    </GridItem>
  )
}
