import { ColumnDef, createColumnHelper } from "@tanstack/react-table"

import { IUser } from "@/entities/user"

const columnHelper = createColumnHelper<IUser>()

export const useColumns = () => {
	const columns: ColumnDef<IUser, any>[] = [
		columnHelper.accessor("id", {
			header: () => <>ID</>,
			cell: (info) => info.getValue(),
		}),
		columnHelper.accessor("firstName", {
			header: () => <>Имя</>,
			cell: (info) => info.getValue(),
		}),
		columnHelper.accessor("age", {
			header: () => <>Возрасть</>,
			cell: (info) => info.getValue(),
		}),
		columnHelper.accessor("bank.currency", {
			header: () => <>Очков</>,
			cell: (info) => info.getValue(),
		})
	]

	return columns
}
