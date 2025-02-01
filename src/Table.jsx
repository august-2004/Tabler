import TableRow from "./TableRow";
import "./Table.css";

export default function Table({ data, sortBy, sortOrder }) {
	const handleSort = (column) => {
		const order =
			sortOrder.column === column && sortOrder.order === "asc" ? "desc" : "asc";
		sortBy(column, order);
	};

	return (
		<div>
			<table>
				<thead>
					<tr className="table-header">
						<th>
							ID
							<button onClick={() => handleSort("id")}>
								{sortOrder.column === "id" && sortOrder.order === "asc" ? (
									<img src={`up-arrow.svg`} width="10" height="10" alt="up" />
								) : (
									<img
										src={`down-arrow.svg`}
										width="10"
										height="10"
										alt="down"
									/>
								)}
							</button>
						</th>
						<th>Title</th>
						<th>Description</th>
						<th>
							Category
							<button onClick={() => handleSort("category")}>
								{sortOrder.column === "category" &&
								sortOrder.order === "asc" ? (
									<img src={`up-arrow.svg`} width="10" height="10" alt="up" />
								) : (
									<img
										src={`down-arrow.svg`}
										width="10"
										height="10"
										alt="down"
									/>
								)}
							</button>
						</th>
						<th>
							Price
							<button onClick={() => handleSort("price")}>
								{sortOrder.column === "price" && sortOrder.order === "asc" ? (
									<img src={`up-arrow.svg`} width="10" height="10" alt="up" />
								) : (
									<img
										src={`down-arrow.svg`}
										width="10"
										height="10"
										alt="down"
									/>
								)}
							</button>
						</th>
						<th>
							Rating
							<button onClick={() => handleSort("rating")}>
								{sortOrder.column === "rating" && sortOrder.order === "asc" ? (
									<img src={`up-arrow.svg`} width="10" height="10" alt="up" />
								) : (
									<img
										src={`down-arrow.svg`}
										width="10"
										height="10"
										alt="down"
									/>
								)}
							</button>
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((product) => (
						<TableRow key={product.id} product={product} />
					))}
				</tbody>
			</table>
		</div>
	);
}
