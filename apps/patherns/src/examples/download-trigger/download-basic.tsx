import { Button, DownloadTrigger } from '@fidely-ui/react'

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
