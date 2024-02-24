import { Table } from '@mantine/core'
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { useGetAllUsersQuery } from '@/entities/user/api/query'

import { useColumns } from '../hooks/useColumns'

const UsersResultTable = () => {
    const { data } = useGetAllUsersQuery()
    const columns = useColumns()

    const table = useReactTable({
        data: data || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        enableSortingRemoval: false,
    })

    return (
        <Table verticalSpacing='sm'>
            <Table.Thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <Table.Tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <Table.Th key={header.id} onClick={header.column.getToggleSortingHandler()} styles={{ th: { cursor: 'pointer' } }}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                                &uarr;&darr;
                            </Table.Th>
                        ))}
                    </Table.Tr>
                ))}
            </Table.Thead>
            <Table.Tbody>
                {table.getRowModel().rows.map((row) => (
                    <Table.Tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <Table.Td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </Table.Td>
                        ))}
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
    )
}

export default UsersResultTable