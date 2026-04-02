// 'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from 'styled-system/jsx'

type ArkComponent = keyof typeof ark

type FidelyFactory = {
  [K in ArkComponent]: ReturnType<typeof styled<(typeof ark)[K]>>
} & {
  <K extends ArkComponent>(
    component: K
  ): ReturnType<typeof styled<(typeof ark)[K]>>
}

const cache = new Map()

function fidelyFactory(component: ArkComponent) {
  const ArkComponent = ark[component]

  if (!ArkComponent) {
    throw new Error(
      `[fidely] "${String(component)}" is not a valid component in Ark UI.`
    )
  }

  // Wraps the Ark headless component in Panda CSS's styled HOC
  return styled(ArkComponent)
}

export const fidely = new Proxy(fidelyFactory, {
  // Handles fidely('button')
  apply(_target, _thisArg, [component]: [ArkComponent]) {
    return fidelyFactory(component)
  },

  // Handles fidely.button
  get(_target, component: ArkComponent) {
    if (!cache.has(component)) {
      cache.set(component, fidelyFactory(component))
    }

    return cache.get(component)
  },
}) as unknown as FidelyFactory
