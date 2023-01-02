import React, { useState } from 'react';
import './task.css';
import { Task as TaskModel } from '../../../models/task';
import { Dispatch, SetStateAction } from 'react';
type TaskProps = {
    tasks: TaskModel[]
    setTask: Dispatch<SetStateAction<TaskModel[]>>;
}

export default function Task(props: TaskProps) {
    const [task, setTask] = useState<string>('');
    const onChangeTask = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTask(event.currentTarget.value);
    }
    const onSubmitTask = (): void => {
        if (props.tasks) {
            let oldIdOfTask = props.tasks.sort((a, b) => a.id - b.id).slice(-1)[0].id;
            if (oldIdOfTask) {
                oldIdOfTask++;
                props.setTask((taskModel: TaskModel[]) => [...taskModel, { id: oldIdOfTask, message: task, done: false, status: false }])
                setTask('');
                props.tasks.sort((a: TaskModel, b: TaskModel) => a.id - b.id);
            }
        } else {
            let i = 1;
            props.setTask((taskModel: TaskModel[]) => [...taskModel, { id: i, message: task, done: false, status: false }])
            setTask('');
            i++;
        }

    }
    return (
        <form className='form'>
            <input type="text" className="input" onChange={onChangeTask} value={task} />
            <button type="button" className='button' onClick={onSubmitTask} >Submit</button>
        </form>
    )
}
