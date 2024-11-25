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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.addTask = void 0;
const prisma_1 = __importDefault(require("./prisma"));
const addTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.task.create({
        data: task,
    });
});
exports.addTask = addTask;
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.default.task.delete({
        where: { id },
    });
});
exports.deleteTask = deleteTask;
