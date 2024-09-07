import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controllers";

const router = Router()

router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

