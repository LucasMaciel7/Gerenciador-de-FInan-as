import { Task } from "../interfaces";
import prisma from "./prisma";

export const addTask = async (task: Task) => {
    return prisma.task.create({
        data: task,
    })
}

export const deleteTask = async (id: number) => {
    return prisma.task.delete({
        where: {id},
    })
}

export const selectAllTasks = async () => {
    return prisma.task.findMany(); // Retorna todas as tarefas
  };