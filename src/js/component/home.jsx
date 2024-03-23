import React, { useState } from "react";

//create your first component
const Home = () => {

	// HTML Eles
	const [task, setTask] = useState("");
	const [toDoList, setToDoList] = useState([]);
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			if(task === "") {
				alert("Please enter something.");
			} else if (toDoList.includes((task))) {
				alert("Task already exists!")
			} else {
				console.log(task)
				addTask(task)
				setTask("");
			}
		};}

		const addTask = (newTask) => {
			setToDoList([...toDoList, newTask]);
		}

		const deleteTask = (taskToDelete) => {
			setToDoList(prevToDoList => prevToDoList.filter(item => item !== taskToDelete));
		}

	const handleInputChange = (event) => {
		setTask(event.target.value);
	};

	const listEmpty = () => toDoList.length === 0;

	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<h1>My To Do List!</h1>
			<input 
			type="text"
			value={task}
			onChange={handleInputChange}
			onKeyDown={handleKeyDown}
			/>
			{listEmpty() && <p>No tasks, add a task</p>}
			<ul>
				{toDoList.map((element, index) => (
					<li key={index}>{element}
					<i className="fas fa-trash" 
					onClick={() => deleteTask(element)}
					style={{ cursor: "pointer"}}
					></i>
					</li>
					))}
			</ul>
		</div>
	);
};

export default Home;
