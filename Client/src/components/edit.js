import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
	const [form, setForm] = useState({
		name: "",
		position: "",
		level: "",
		records: [],
	});
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchData() {
			const id = params.id.toString();
			const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);

			if (!response.ok) {
				const message = `An error has occurred: ${response.statusText}`;
				window.alert(message);
				return;
			}

			const record = await response.json();
			if (!record) {
				window.alert(`Record with id ${id} not found`);
				navigate("/");
				return;
			}

			setForm(record);

			return;
		}, [params.id,navigate]
	});

}