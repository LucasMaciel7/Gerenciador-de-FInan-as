import { Router } from "express";
import { createTask,getAllTasks,removeTask } from "../controllers/taskController";
import { create } from "domain";

//import { renderHomePage, createTask } from "../controllers/taskController";


const router = Router();

// router.get("/", renderHomePage);
router.get("/tasks", getAllTasks);
router.post("/tasks/add", createTask);
router.delete("/tasks/:id", removeTask)


export default router;