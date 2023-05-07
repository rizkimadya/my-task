import React, { useState } from "react";
import Button from "./Button";

const FormInput = ({ addTask }) => {
	const [input, setInput] = useState("");

	const handleChange = e => {
		setInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (input !== " ") {
			addTask(input);
		}
		// setelah mengisi todo list baru maka otomatis value input ter reset
		setInput("");
	};

	return (
		<form style={inputForm} onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add Task"
				value={input}
				onChange={handleChange}
				style={inputStyle}
			/>
			<Button title="Add" btnColor="primary" action={handleSubmit} />
		</form>
	);
};

export default FormInput;

const inputForm = {
	background: "#fff",
	color: "#fff",
	display: "flex",
	alignItems: "center",
	height: "3rem",
	padding: "0 1rem",
	justifyContent: "space-between",
	margin: "0.5rem 0",
};
const inputStyle = {
	width: "70%",
	border: "none",
	outline: "none",
};
