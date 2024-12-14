import { useState } from 'react';
import './addtask.css';
import { addTask } from '../../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddTask = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	const [state, setState] = useState({
		task: '',
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTask(state.task, currentUser.id));
		setState({
			task: '',
		});
	};

	return (
		<div>
			<div className='addtask'>
				<form action='' onSubmit={handleSubmit} className='task-form'>
					<input
						type='text'
						name='task'
						placeholder='Add New Task'
						onChange={handleChange}
						value={state.task}
						className='task-input'
					/>
					<button className='button'>Add Task</button>
				</form>
			</div>
		</div>
	);
};

export default AddTask;
