export default function TableRow({ product }) {
	return (
		<tr key={product.id}>
			<td>{product.id}</td>
			<td>{product.title}</td>
			<td>{product.description}</td>
			<td>{product.category}</td>
			<td>{product.price}</td>
			<td>{product.rating}</td>
		</tr>
	);
}
