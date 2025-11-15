import { accentColor, grayColor } from '@fidely-ui/panda-preset'
import { Box, Grid, Text, VStack, HStack } from '@fidely-ui/react'
import { token } from '@fidely-ui/styled-system/tokens'

const shades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const ColorShowcase = () => {
  return (
    <VStack alignItems="start" gap="10" py="6">
      <ColorSection title="Neutral tones" palettes={grayColor} />
      <ColorSection title="Accent hues" palettes={accentColor} />
    </VStack>
  )
}

const ColorSection = ({
  title,
  palettes,
}: {
  title: string
  palettes: readonly string[]
}) => {
  return (
    <VStack alignItems="start" gap="6" w="full">
      <Text fontSize="sm" fontWeight="medium" color="fg.muted">
        {title}
      </Text>

      <Grid columns={{ base: 1, md: 2 }} gap="4" w="full">
        {palettes.map((name) => (
          <ColorPaletteCard key={name} name={name} />
        ))}
      </Grid>
    </VStack>
  )
}

const ColorPaletteCard = ({ name }: { name: string }) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="border.subtle"
      borderRadius="xl"
      overflow="hidden"
      bg="bg.default"
      boxShadow="sm"
      transition="all 0.2s ease"
      _hover={{ transform: 'translateY(-4px)', boxShadow: 'sm' }}
    >
      <Box p="4" borderBottomWidth="1px" borderColor="border.subtle">
        <Text fontWeight="medium" textTransform="capitalize" color="fg.default">
          {name}
        </Text>
      </Box>
      <Grid columns={{ base: 5, md: 10 }} gap="2" p="2">
        {shades.map((shade) => (
          <ColorSwatch
            key={shade}
            colorName={`${name}.${shade}`}
            shade={shade}
          />
        ))}
      </Grid>
    </Box>
  )
}

const ColorSwatch = ({ colorName }: { colorName: string; shade: number }) => {
  return (
    <HStack
      h="50px"
      borderRadius="md"
      padding={'3px'}
      style={{
        backgroundColor: token.var(`colors.${colorName}` as any),
      }}
      borderWidth="1px"
      borderColor="border.subtle"
      _hover={{ transform: 'scale(1.05)', zIndex: 1 }}
      transition="all 0.2s ease"
    />
  )
}
