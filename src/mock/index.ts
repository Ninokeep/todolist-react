import { createServer, Model } from "miragejs"
import { Task } from "../models/task";




export function makeServer({ environment = 'development' }) {
  const tasks: Task[] = [
    { id: 210, message: "Swim with papy", done: true, status: false },
    { id: 100, message: "Play apex legends", done: false, status: false },
    { id: 1, message: "Run with my friends", done: false, status: false },
    { id: 2, message: "Eat with my mother", done: true, status: false },
    { id: 3, message: "Drink with my babe", done: false, status: false },
    { id: 14, message: "Run with my friends", done: false, status: false },
    { id: 21, message: "Eat with my mother", done: true, status: false },
    { id: 32, message: "Drink with my babe", done: false, status: false },
  ];
  return createServer({
    environment,
    routes() {
      this.namespace = "api";
      this.get("/tasks", () => {
        return tasks
      }),
        this.post('/tasks', (schema, request) => {
          let message = JSON.parse(request.requestBody);
          let id: number = 34;
          const task: Task = {
            message: message,
            id: id,
            done: false,
            status: false
          }
          id++;

          return { message: message }
        })
    },
  })

}