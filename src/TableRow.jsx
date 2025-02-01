const colors = {
	beauty: "#ffcce1",
	fragrances: "#f2ebcc",
	furniture: "#f7dde8",
	groceries: "#c6e2e7",
};

export default function TableRow({ product }) {
	return (
		<tr
			key={product.id}
			style={{ backgroundColor: colors[product.category] || "#ffffff" }}
		>
			<td>{product.id}</td>
			<td>{product.title}</td>
			<td className="description">{product.description}</td>
			<td>
				<img
					className="category-logo"
					src={`${product.category}.svg`}
					alt={`${product.category} logo`}
					width="40"
					height="40"
				/>
			</td>
			<td>{product.price}</td>
			<td>{product.rating}</td>
		</tr>
	);
}
