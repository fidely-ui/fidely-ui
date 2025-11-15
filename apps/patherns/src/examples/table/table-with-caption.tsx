import { Table } from '@fidely-ui/react/table'

export const TableWithCaption = () => {
  return (
    <Table.Root>
      <Table.Caption captionSide={'bottom'}>
        Item order and pricing information
      </Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.HeadCell>Item</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Stock</Table.HeadCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell>{item.price}</Table.Cell>
            <Table.Cell>{item.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

export const items = [
  {
    id: 1,
    name: 'Organic Honey',
    category: 'Grocery',
    price: 12.99,
    stock: 50,
  },
  {
    id: 2,
    name: 'Organic Honey',
    category: 'Grocery',
    price: 12.99,
    stock: 40,
  },
  {
    id: 3,
    name: 'Organic Honey',
    category: 'Grocery',
    price: 12.99,
    stock: 80,
  },
]
