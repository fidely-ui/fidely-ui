import { Table } from '@fidely-ui/react/table'

export const TableBasics = () => {
  return (
    <Table.Root>
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
  { id: 2, name: 'Yoga Mat', category: 'Fitness', price: 29.99, stock: 20 },
  {
    id: 3,
    name: 'Watercolor Set',
    category: 'Art Supplies',
    price: 24.5,
    stock: 15,
  },
  {
    id: 4,
    name: 'Running Shoes',
    category: 'Footwear',
    price: 89.99,
    stock: 30,
  },
]
