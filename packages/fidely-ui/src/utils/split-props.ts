export function splitProps<T extends Record<string, any>>(
  props: T,
  patternKeys: string[]
): [Record<string, any>, Record<string, any>] {
  const patternProps: Record<string, any> = {}
  const restProps: Record<string, any> = {}

  for (const key in props) {
    if (patternKeys.includes(key)) {
      patternProps[key] = props[key]
    } else {
      restProps[key] = props[key]
    }
  }

  return [patternProps, restProps]
}
