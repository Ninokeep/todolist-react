import { useContext, createContext } from "react";
import { Task } from '../../models/task';


export const taskContext: React.Context<Task[]> = createContext<Task[]>([]);