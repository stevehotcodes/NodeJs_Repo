import { Router } from "express";
import { createTodo, getTodos } from "../controllers/todo.controllers.js";



const todoRouter= Router();

todoRouter.get('/todos',getTodos);
todoRouter.post('/todos',createTodo)
// todoRouter.put('/todos/:id',updateTodos);
// todoRouter.delete('/todos/:id',deleteTodo);
// todoRouter.patch('/todos/:id',completedTOdo)






export default todoRouter