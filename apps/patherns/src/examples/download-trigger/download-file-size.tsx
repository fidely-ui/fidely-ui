import { Button, DownloadTrigger, FormatByte } from '@snaps-ui/react'
import { LuDownload } from 'react-icons/lu'

const data = 'The modern UI libary.'

export const DownloadFileSize = () => {
  return (
    <DownloadTrigger
      data={data}
      fileName="sample.txt"
      mimeType="text/plain"
      asChild
    >
      <Button variant="outline">
        <LuDownload /> Download (
        <FormatByte value={data.length} unitDisplay="narrow" />)
      </Button>
    </DownloadTrigger>
  )
}
