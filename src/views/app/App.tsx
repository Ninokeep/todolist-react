import './App.css'
import ListTasks from '../../components/tasks/list-tasks/list-tasks';
import { useState, useEffect } from 'react';
import { Task as TaskModel } from '../../models/task';
import Task from '../../components/tasks/task/task';

function App() {

  const [tasks, setTask] = useState<TaskModel[]>([]);
  const [loadData, setLoadData] = useState<boolean>(false);
  useEffect(() => {
    setLoadData(true);
    fetch('api/tasks').then((response: Response) => {
      response.json().then((task: TaskModel[]) => {
        const taskSorted: TaskModel[] = task.sort((taskA: TaskModel, taskB: TaskModel) => taskA.id - taskB.id);
        setTask(taskSorted);
        setLoadData(false);

      })
    }).catch(err => {
      if (err) {
        setLoadData(true);
      }
    })

  }, []);

  return (
    <div>
      <ListTasks tasks={tasks} loadData={loadData} setTask={setTask} />
      <Task tasks={tasks} setTask={setTask} />
    </div>
  )
}

export default App
