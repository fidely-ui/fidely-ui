import * as runtime from 'react/jsx-runtime'
import { Kbd } from '@snaps-ui/react/kbd'
import { Card } from '@snaps-ui/react/card'

import { ExampleTabs } from '~/components/docs/example-tabs'
import { ExamplePreview } from '~/components/docs/example-preview'
import { ExampleCode } from '~/components/docs/example-code'
import { ExampleCodeWrapper } from '~/components/docs/example-code-wrapper'
import { Callout } from '~/components/mdx/callout'
import { Anchor } from '~/components/mdx/anchor'
import { Code, Pre } from '~/components/mdx/code'
import { CodeBlock } from '~/components/mdx/code-block'
import { H1, H2, H3, H4, P, Strong } from '~/components/mdx/typography'
import {
  Table,
  TableBody,
  TableCell,
  TableHeadCell,
  TableHeader,
  TableRow,
  TableFooter,
} from '~/components/mdx/table'
import { ColorShowcase } from './mdx/color-showcase'

const sharedComponents = {
  a: Anchor,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  kbd: Kbd,
  pre: Pre,
  code: Code,
  strong: Strong,
  p: P,
  card: Card,
  table: Table,
  tbody: TableBody,
  thead: TableHeader,
  th: TableHeadCell,
  tfoot: TableFooter,
  tr: TableRow,
  td: TableCell,
  callout: Callout,
  ColorShowcase,
  ExampleTabs: ExampleTabs,
  ExamplePreview: ExamplePreview,
  ExampleCode(props: { name: string }) {
    return (
      <ExampleCodeWrapper
        maxHeight="480px"
        rounded="lg"
        height="auto"
        mb="2"
        mt="6"
      >
        <ExampleCode name={props.name} />
      </ExampleCodeWrapper>
    )
  },
  'code-block': CodeBlock,
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...components }} />
}
