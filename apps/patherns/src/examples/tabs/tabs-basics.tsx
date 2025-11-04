import { Tabs } from '@snaps-ui/react/tabs'
import { FaReact, FaVuejs } from 'react-icons/fa6'
import { RiSvelteLine } from 'react-icons/ri'

export const TabsBasics = () => {
  return (
    <Tabs.Root defaultValue="react">
      <Tabs.List>
        <Tabs.Trigger value="react">
          <FaReact />
          React
        </Tabs.Trigger>
        <Tabs.Trigger value="vue">
          <FaVuejs />
          Vue
        </Tabs.Trigger>
        <Tabs.Trigger value="svelte">
          <RiSvelteLine />
          Svelte
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="react">
        React is a free and open-source front-end JavaScript library
      </Tabs.Content>
      <Tabs.Content value="vue">
        Vue is a progressive JavaScript framework for building user interfaces
      </Tabs.Content>
      <Tabs.Content value="svelte">
        Svelte is a UI framework that uses a compiler to let you write
        breathtakingly concise components
      </Tabs.Content>
    </Tabs.Root>
  )
}
