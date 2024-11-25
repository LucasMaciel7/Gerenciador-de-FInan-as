"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTask = exports.createTask = void 0;
const taskModel_1 = require("../models/taskModel");
// Controlador para criar uma nova tarefa
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = {
            dentistName: req.body.dentistName,
            description: req.body.description,
            entryDate: new Date(req.body.entryDate),
            color: req.body.color,
            tooth: req.body.tooth,
            patientName: req.body.patientName,
            value: parseFloat(req.body.value),
            deliveryDate: new Date(req.body.deliveryDate),
        };
        const newTask = yield (0, taskModel_1.addTask)(task);
        // Retorna explicitamente a resposta de sucesso
        return res.status(201).json({
            message: "Task created successfully!",
            data: newTask,
        });
    }
    catch (error) {
        // Retorna explicitamente a resposta de erro
        return res.status(500).json({
            error: "Failed to create task",
            details: error instanceof Error ? error.message : error,
        });
    }
});
exports.createTask = createTask;
// Controlador para deletar uma tarefa
const removeTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Valida o ID
        if (isNaN(Number(id))) {
            return res.status(400).json({
                error: "Invalid task ID",
            });
        }
        // Deleta a tarefa
        yield (0, taskModel_1.deleteTask)(Number(id));
        // Retorna explicitamente a resposta de sucesso
        return res.status(200).json({
            message: "Task deleted successfully!",
        });
    }
    catch (error) {
        // Retorna explicitamente a resposta de erro
        return res.status(500).json({
            error: "Failed to delete task",
            details: error instanceof Error ? error.message : error,
        });
    }
});
exports.removeTask = removeTask;
