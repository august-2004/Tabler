import React, { useState, useEffect } from "react";
import Table from "./Table";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch("https://dummyjson.com/products");
		const fetchedData = await response.json();
		setData(fetchedData.products);
	};

	return <Table data={data} />;
}

export default App;
