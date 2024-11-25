import { Request, Response } from "express";
import { addTask, deleteTask, selectAllTasks } from "../models/taskModel";
import { Task } from "../interfaces";

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const task: Task = {
      dentistName: req.body.dentistName,
      description: req.body.description,
      entryDate: new Date(req.body.entryDate),
      color: req.body.color,
      tooth: req.body.tooth,
      patientName: req.body.patientName,
      value: parseFloat(req.body.value),
      deliveryDate: new Date(req.body.deliveryDate),
    };

    const newTask = await addTask(task);

    res.status(201).json({
      message: "Task created successfully!",
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to create task",
      details: error instanceof Error ? error.message : String(error),
    });
  }
};

export const removeTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      res.status(400).json({
        error: "Invalid task ID",
      });
      return;
    }

    await deleteTask(Number(id));

    res.status(200).json({
      message: "Task deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete task",
      details: error instanceof Error ? error.message : String(error),
    });
  }
};


export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await selectAllTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch tasks",
      details: error instanceof Error ? error.message : error,
    });
  }
};
