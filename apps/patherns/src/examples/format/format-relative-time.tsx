import {
  FormatRelativeTime as SnapsFormatRelativeTime,
  Stack,
  Typography,
} from '@snaps-ui/react'

export const FormatRelativeTimeExample = () => {
  const now = new Date()

  return (
    <Stack gap={2}>
      <Typography>
        Edited{' '}
        <SnapsFormatRelativeTime value={new Date('2025-10-24T10:00:00Z')} />
      </Typography>
      <Typography>
        <SnapsFormatRelativeTime value={new Date(now.getTime() - 1000 * 60)} />{' '}
        {/* 1 min ago */}
      </Typography>

      <Typography>
        <SnapsFormatRelativeTime
          value={new Date(now.getTime() - 1000 * 60 * 60)}
        />{' '}
        {/* 1 hr ago */}
      </Typography>

      <Typography>
        <SnapsFormatRelativeTime
          value={new Date(now.getTime() - 1000 * 60 * 60 * 24)}
        />{' '}
        {/* 1 day ago */}
      </Typography>

      <Typography>
        <SnapsFormatRelativeTime
          value={new Date(now.getTime() - 1000 * 60 * 60 * 24 * 7)}
        />{' '}
        {/* 1 week ago */}
      </Typography>

      <Typography>
        <SnapsFormatRelativeTime
          value={new Date(now.getTime() - 1000 * 60 * 60 * 24 * 30)}
        />{' '}
        {/* 1 month ago */}
      </Typography>

      <Typography>
        <SnapsFormatRelativeTime
          value={new Date(now.getTime() - 1000 * 60 * 60 * 24 * 365)}
        />{' '}
        {/* 1 year ago */}
      </Typography>
    </Stack>
  )
}
