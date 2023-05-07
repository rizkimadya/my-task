import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import FormInput from "./components/FormInput";
import EditModal from "./components/EditModal";

function App() {
	const [todos, setTodos] = useState([
		{ id: 1, title: "Reading Book" },
		{ id: 2, title: "Workout Training" },
	]);

	const [isEdit, setIsEdit] = useState(false);

	const [editData, setEditData] = useState({
		id: "",
		title: "",
	});

	const setTitle = e => {
		setEditData({ ...editData, title: e.target.value });
	};

	const openModal = (id, data) => {
		setIsEdit(true);
		setEditData({ id: id, title: data });
	};

	const updateData = () => {
		const { id, title } = editData;
		const newData = { id, title };
		const newTodos = [...todos];
		newTodos.splice(id - 1, 1, newData);
		setTodos(newTodos);
		setIsEdit(false);
		setEditData({ id: "", title: "" });
	};

	const deleteTask = id => {
		setTodos(todos.filter(item => item.id !== id));
	};

	const addTask = data => {
		const newId = todos.length + 1;
		const newData = {
			id: newId,
			title: data,
		};
		setTodos([...todos, newData]);
	};

	return (
		<div className="app">
			<div className="logo">
				<img src={logo} alt="logo" />
				<h3>Task List</h3>
			</div>
			<div className="list">
				{todos.map(item => (
					<TodoItem
						key={item.id}
						todo={item}
						del={deleteTask}
						open={openModal}
					/>
				))}
			</div>
			<div className="input-form">
				<FormInput addTask={addTask} />
			</div>
			<EditModal
				edit={isEdit}
				close={() => setIsEdit(false)}
				change={setTitle}
				data={editData}
				update={updateData}
			/>
		</div>
	);
}

export default App;
