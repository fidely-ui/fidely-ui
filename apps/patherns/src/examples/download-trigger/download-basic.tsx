import { Button, DownloadTrigger } from '@snaps-ui/react'

const data = 'The modern UI libary'

export const DownloadBasic = () => {
  return (
    <DownloadTrigger
      data={data}
      fileName="sample.txt"
      mimeType="text/plain"
      asChild
    >
      <Button variant="outline">Download txt</Button>
    </DownloadTrigger>
  )
}
