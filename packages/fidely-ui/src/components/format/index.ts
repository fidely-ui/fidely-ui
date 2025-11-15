import { Format } from '@ark-ui/react/format'

export const FormatByte = Format.Byte
export const FormatNumber = Format.Number
export const FormatRelativeTime = Format.RelativeTime

export interface FormatByteProps extends Format.ByteProps {}
export interface FormatNumberProps extends Format.NumberProps {}
export interface FormatRelativeTimeProps extends Format.RelativeTimeProps {}
