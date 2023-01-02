import { useState, Dispatch, SetStateAction } from 'react';
import { Task } from '../../../models/task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './list-tasks.css';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

export type ListTaskProps = {
	tasks: Task[],
	loadData: boolean,
	setTask: Dispatch<SetStateAction<Task[]>>;
}

export default function ListTasks(props: ListTaskProps): JSX.Element {
	const [checked, setChecked] = useState(false);
	const [editingIndex, setEditingIndex] = useState(-1);
	const [inputUpdate, setInputUpdate] = useState('');
	const [inputCondition, setInputCondition] = useState(false);
	const deletTask = (id: number): void => {
		if (id && id > 0) {
			props.tasks.splice(props.tasks.findIndex(item => item.id === id), 1);
		}
	}
	const onDelete = (id: number) => {
		setChecked(!checked);
		if (id) {
			deletTask(id);
		}

	}
	const handleEdit = (index: number) => {
		setEditingIndex(index)
	}
	const handleSave = (index: number) => {
		setEditingIndex(-1)
	}
	const getTask = () => {
		if (props.loadData) {
			return <h4>Loading...</h4>
		} else {
			if (props.tasks.length > 0) {
				props.tasks.map((fields, index) => {
					if (index === editingIndex) {

						return (

							<li key={index}> <input value={fields.message} />

								<button onClick={() => handleSave(index)}> Register</button>
							</li>
						)
					}
					return (
						<li key={index} >
							<span>element ici</span>
							<button onClick={() => handleEdit(index)}> Edit </button>
						</li>

					)
				})
			}
			else {
				return <h4>No task find !</h4>
			}
		}

	}
	return (
		<div className='card-container'>
			{getTask()}
		</div>
	)
}
