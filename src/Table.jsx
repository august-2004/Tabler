import TableRow from "./TableRow";
import "./Table.css";
export default function Table({ data }) {
	return (
		<div>
			<table>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Description</th>
					<th>Category</th>
					<th>Price</th>
					<th>Rating</th>
				</tr>
				<tbody>
					{data.map((product) => (
						<TableRow key={product.id} product={product} />
					))}
				</tbody>
			</table>
		</div>
	);
}
