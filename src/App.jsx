import React, { useState, useEffect } from "react";
import Table from "./Table";
import "./App.css";

function App() {
	const [sortedData, setSortedData] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch("https://dummyjson.com/products");
		const fetchedData = await response.json();
		setSortedData(fetchedData.products);
		sortBy("id");
	};
	const sortBy = (column, order = "asc") => {
		const sorted = [...sortedData].sort((a, b) => {
			if (a[column] < b[column]) {
				return order === "asc" ? -1 : 1;
			}
			if (a[column] > b[column]) {
				return order === "asc" ? 1 : -1;
			}
			return 0;
		});
		setSortedData(sorted);
	};

	if (sortedData.length === 0) {
		return <div>Fetching...</div>;
	}
	return <Table data={sortedData} sortBy={sortBy} />;
}

export default App;
