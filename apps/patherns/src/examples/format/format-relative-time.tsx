import {
  FormatRelativeTime as SnapsFormatRelativeTime,
  Stack,
  Text,
} from '@snaps-ui/react'

export const FormatRelativeTime = () => {
  const now = new Date()

  return (
    <Stack gap={2}>
      <Text>
        Edited{' '}
        <SnapsFormatRelativeTime value={new Date('2025-10-24T10:00:00Z')} />
      </Text>
      <Text>
        <SnapsFormatRelativeTime value={new Date(now.getTime() - 1000 * 60)} />{' '}
        {/* 1 min ago */}
      </Text>

      <Text>
        <SnapsFormatRelativeTime
          value={new Date(now.getTime() - 1000 * 60 * 60)}
        />{' '}
        {/* 1 hr ago */}
      </Text>

      <Text>
        <SnapsFormatRelativeTime
          value={new Date(now.getTime() - 1000 * 60 * 60 * 24)}
        />{' '}
        {/* 1 day ago */}
      </Text>

      <Text>
        <SnapsFormatRelativeTime
          value={new Date(now.getTime() - 1000 * 60 * 60 * 24 * 7)}
        />{' '}
        {/* 1 week ago */}
      </Text>

      <Text>
        <SnapsFormatRelativeTime
          value={new Date(now.getTime() - 1000 * 60 * 60 * 24 * 30)}
        />{' '}
        {/* 1 month ago */}
      </Text>

      <Text>
        <SnapsFormatRelativeTime
          value={new Date(now.getTime() - 1000 * 60 * 60 * 24 * 365)}
        />{' '}
        {/* 1 year ago */}
      </Text>
    </Stack>
  )
}
