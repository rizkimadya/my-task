import React from "react";
import Button from "./Button";

const TodoItem = ({ todo, del, open }) => {
	const deleteById = id => {
		del(id);
	};
	return (
		<div style={todoItem}>
			<p>{todo.title}</p>
			<div>
				<Button
					title="Edit"
					btnColor="success"
					action={() => open(todo.id, todo.title)}
				/>
				<Button
					title="Hapus"
					btnColor="warning"
					action={() => deleteById(todo.id)}
				/>
			</div>
		</div>
	);
};

export default TodoItem;

const todoItem = {
	background: "#2da4f8",
	color: "#fff",
	display: "flex",
	alignItems: "center",
	height: "3rem",
	padding: "0 1rem",
	justifyContent: "space-between",
	margin: "0.5rem 0",
};
