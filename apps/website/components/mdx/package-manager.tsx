import { Box } from '@fidely-ui/react/box'
import { Tabs } from '@fidely-ui/react/tabs'

import { CopyButton } from '~/components/mdx/copy-button'
import { getHighlighter } from '~/lib/shiki'

type PackageManagerNames = 'npm' | 'yarn' | 'pnpm' | 'bun'

interface PackageManagerProps {
  managers: Partial<Record<PackageManagerNames, string>>
}

export const PackageManager = ({ managers }: PackageManagerProps) => {
  const activeManagers = Object.keys(managers) as PackageManagerNames[]

  if (activeManagers.length === 0) return null

  return (
    <Tabs.Root defaultValue={activeManagers[0]}>
      <Tabs.List>
        {activeManagers.map((name) => (
          <Tabs.Trigger key={name} value={name}>
            {name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {activeManagers.map((name) => (
        <Tabs.Content key={name} value={name}>
          <CodeBash command={managers[name] || 'npm'} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}

const CodeBash = async ({ command }: { command: string }) => {
  const html = await getHighlighter(command, { lang: 'bash' })

  return (
    <Box position={'relative'}>
      <Box
        className="code-highlight"
        dangerouslySetInnerHTML={{ __html: html }}
        css={{
          overflow: 'auto',
          borderRadius: 'md',
        }}
      />
      <Box pos="absolute" top="7" right="4">
        <CopyButton code={command} />
      </Box>
    </Box>
  )
}
