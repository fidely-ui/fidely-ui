import { Table } from '@fidely-ui/react/table'

export const TableScrollArea = () => {
  return (
    <Table.ScrollArea>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.HeadCell>Item</Table.HeadCell>
            <Table.HeadCell minWidth="200px">Category</Table.HeadCell>
            <Table.HeadCell minWidth="200px">Price</Table.HeadCell>
            <Table.HeadCell>Stock</Table.HeadCell>
            <Table.HeadCell>Extra Column</Table.HeadCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell minWidth="200px">{item.category}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell minWidth="200px">{item.price}</Table.Cell>
              <Table.Cell>More info</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
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
  { id: 2, name: 'Almond Milk', category: 'Grocery', price: 3.49, stock: 30 },
  { id: 3, name: 'Yoga Mat', category: 'Fitness', price: 25.0, stock: 90 },
  {
    id: 4,
    name: 'Wireless Mouse',
    category: 'Electronics',
    price: 29.99,
    stock: 20,
  },
  {
    id: 5,
    name: 'Running Shoes',
    category: 'Footwear',
    price: 79.99,
    stock: 15,
  },
]
