import React from 'react'
import { useTable, usePagination } from 'react-table'
import moment from 'moment'

const getFormattedTime = time => {
	return moment(time).format('DD-MM-YY, hh:mm:ss a')
}
const shortenId = id => {
	return id.substring(id.length - 7)
}
const getStateDot = state => {
	if (state === 'SUCCESS') {
		return <div className="dot green"></div>
	} else if (state === 'PENDING') {
		return <div className="dot yellow"></div>
	} else if (state === 'FAILED') {
		return <div className="dot red"></div>
	} else {
		return <div className="dot grey"></div>
	}
}

export default function Table({ jobs }) {
	const jobMapper = job => {
		return {
			Created: getFormattedTime(job.created),
			Status: getStateDot(job.state),
			Function: job.functionName,
			AA: job.aaId,
			ID: shortenId(job.jobId),
		}
	}
	const data = React.useMemo(() => jobs.map(job => jobMapper(job)), [])
	const cols = ['Created', 'Status', 'Function', 'AA', 'ID']
	const colMapper = col => {
		return {
			Header: col,
			accessor: col,
		}
	}
	const columns = React.useMemo(() => cols.map(col => colMapper(col)), [])

	const tableInstance = useTable(
		{ columns, data, initialState: { pageIndex: 0, pageSize: 6 } },
		usePagination
	)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		state: { pageIndex },
	} = tableInstance

	return (
		<div>
			<table {...getTableProps()}>
				<thead>
					{
						// Loop over the header rows
						headerGroups.map(headerGroup => (
							// Apply the header row props
							<tr {...headerGroup.getHeaderGroupProps()}>
								{
									// Loop over the headers in each row
									headerGroup.headers.map(column => (
										// Apply the header cell props
										<th {...column.getHeaderProps()} className="table-h">
											{
												// Render the header
												column.render('Header')
											}
										</th>
									))
								}
							</tr>
						))
					}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map(row => {
						prepareRow(row)
						return (
							<tr
								{...row.getRowProps()}
								onClick={e => {
									const children = e.currentTarget.children
									const id = children[children.length - 1].innerText
									const actualId = jobs.filter(
										job => job.jobId.substring(job.jobId.length - 7) === id
									)[0].jobId
									window.location.href = `/#/job/${actualId}`
								}}
								className="table-r"
							>
								{row.cells.map(cell => {
									return (
										<td {...cell.getCellProps()} className="table-d">
											{cell.render('Cell')}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
			<div className="pagination">
				<button onClick={() => gotoPage(0)}>{'<<'}</button>
				<button onClick={() => previousPage()}>{'<'}</button>
				<span>
					{pageIndex + 1} of {pageOptions.length}
				</span>
				<button onClick={() => nextPage()}>{'>'}</button>
				<button onClick={() => gotoPage(pageCount - 1)}>{'>>'}</button>
			</div>
		</div>
	)
}
