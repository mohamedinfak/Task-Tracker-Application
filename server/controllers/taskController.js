const User = require('../../database/model/user.model');
const Task = require('../../database/model/task.model');

const addTask = async (req, res) => {
	const { task, id } = req.body;

	try {
		if (!task) return res.status(400).send('please enter the task');
		if (task.length < 10) res.status(400).send('add minimum 10 char');
		const taskDetail = await new Task({
			task,
			cretedBy: id,
		});
		await taskDetail.save();
		return res.status(200).send(taskDetail);
	} catch (error) {
		return res.status(400).send('task addition failed');
	}
};

const getAllTasks = async (req, res) => {
	const { id } = req.query;
	try {
		let tasklist = await Task.find({ cretedBy: id });
		return res.status(200).send(tasklist);
	} catch (error) {
		return res.status(400).send(error);
	}
};

const statusChange = async (req, res) => {
	const { id, string } = req.body;

	try {
		let task = await Task.findById({ _id: id });
		if (string === 'right') {
			if (task.status === 'backlog') {
				task.status = 'todo';
				task.save();
				return res.send(task);
			} else if (task.status === 'todo') {
				task.status = 'doing';
				task.save();
				return res.send(task);
			} else if (task.status === 'doing') {
				task.status = 'done';
				task.save();
				return res.send(task);
			}
		} else {
			if (task.status === 'done') {
				task.status = 'doing';
				task.save();
				return res.send(task);
			} else if (task.status === 'doing') {
				task.status = 'todo';
				task.save();
				return res.send(task);
			} else if (task.status === 'todo') {
				task.status = 'backlog';
				task.save();
				return res.send(task);
			}
		}
	} catch (error) {}
};

const editTask = async (req, res) => {
	const { id } = req.params; // Task ID from the URL parameter
	const { task } = req.body; // Updated task details from the request body
  
	try {
	  if (!id) {
		return res.status(400).send("Task ID is required");
	  }
  
	  if (!task || task.trim().length < 10) {
		return res.status(400).send("Task must be at least 10 characters long");
	  }
  
	  const updatedTask = await Task.findByIdAndUpdate(
		id,
		{ task },
		{ new: true } // Return the updated document
	  );
  
	  if (!updatedTask) {
		return res.status(404).send("Task not found");
	  }
  
	  return res.status(200).json(updatedTask);
	} catch (error) {
	  console.error("Error editing task:", error);
	  return res.status(500).send("Failed to edit task");
	}
  };
  

  


const deleteTask = async (req, res) => {
	const { id } = req.params;
	try {
		let response = await Task.findByIdAndDelete(id);
		return res.status(200).send(response);
	} catch (error) {
		return res.status(400).send('deleteFailed');
	}
};

module.exports = {
	addTask,
	getAllTasks,
	editTask,
	statusChange,
	deleteTask,
};
