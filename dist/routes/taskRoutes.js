"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
//import { renderHomePage, createTask } from "../controllers/taskController";
const router = (0, express_1.Router)();
// router.get("/", renderHomePage);
router.post("/tasks/add", taskController_1.createTask);
router.delete("/tasks/:id", taskController_1.removeTask);
exports.default = router;
