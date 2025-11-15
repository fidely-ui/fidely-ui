import { Box } from '@fidely-ui/react/box'

import { ExamplePreview } from '~/components/docs/example-preview'
import { ExampleCodeWrapper } from '~/components/docs/example-code-wrapper'
import { ExampleCode } from '~/components/docs/example-code'
import { type ExampleProps } from '~/components/docs/example-tabs'

export const Example = (props: ExampleProps) => {
  const { name } = props
  if (!name) return null

  return (
    <Box
      className="example-tabs"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      divideY="1px"
    >
      <Box padding="10">
        <ExamplePreview name={name} />
      </Box>
      <ExampleCodeWrapper maxHeight="400px">
        <ExampleCode name={name} />
      </ExampleCodeWrapper>
    </Box>
  )
}
