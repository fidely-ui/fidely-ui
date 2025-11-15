'use client'

import { Spinner, type SpinnerProps } from '../spinner'

export interface LoaderProps extends SpinnerProps {
  spinner?: React.ReactNode
}

export const Loader = (props: LoaderProps) => {
  const { spinner, ...rest } = props

  if (spinner) return <>{spinner}</>

  return (
    <Spinner
      width="1.1em"
      height="1.1em"
      borderWidth="1.5px"
      aria-hidden="true"
      {...rest}
    />
  )
}
