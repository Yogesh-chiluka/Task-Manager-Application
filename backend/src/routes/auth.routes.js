import { Router } from "express";
const router = Router();
import { userRegistration, userLogin, googleLogin, userLogout} from "../controllers/auth.controller.js";

router.route("/register", userRegistration).post();

router.route("/login", userLogin).post();

router.route("/google", googleLogin).post;

router.route("/logout", userLogout).post();

export default router 