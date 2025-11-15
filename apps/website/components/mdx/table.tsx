import type { ReactNode } from 'react'
import { Table as FidelyTable } from '@fidely-ui/react/table'

interface TableProps {
  children?: ReactNode
}

export const Table = (props: FidelyTable.RootProps & TableProps) => {
  return (
    <FidelyTable.ScrollArea>
      <FidelyTable.Root
        size="sm"
        variant="subtle"
        {...props}
        css={{
          marginTop: '2em',
          marginBottom: '2em',
        }}
      >
        {props.children}
      </FidelyTable.Root>
    </FidelyTable.ScrollArea>
  )
}

export const TableHeader = (props: TableProps) => {
  return <FidelyTable.Header {...props}>{props.children}</FidelyTable.Header>
}

export const TableBody = (props: TableProps) => {
  return <FidelyTable.Body {...props}>{props.children}</FidelyTable.Body>
}

export const TableRow = (props: TableProps) => {
  return <FidelyTable.Row {...props}>{props.children}</FidelyTable.Row>
}

export const TableHeadCell = (props: TableProps) => {
  return (
    <FidelyTable.HeadCell {...props}>{props.children}</FidelyTable.HeadCell>
  )
}

export const TableCell = (props: TableProps) => {
  return <FidelyTable.Cell {...props}>{props.children}</FidelyTable.Cell>
}

export const TableFooter = (props: TableProps) => {
  return <FidelyTable.Footer {...props}>{props.children}</FidelyTable.Footer>
}
