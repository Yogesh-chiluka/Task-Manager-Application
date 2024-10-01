import { Router } from "express";
import { getTasks, createTasks } from "../controllers/tasks.controller.js";

const router = Router()

router.route('/tasks').get(getTasks);

router.route('/createTasks').post(createTasks);



export default router 