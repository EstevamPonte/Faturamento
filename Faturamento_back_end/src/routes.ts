import { Router } from "express";
import { AuthenticateUserController } from "./controller/Users/AuthenticateUserController";
import { CreateUserController } from "./controller/Users/CreateUserController";

const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

router.post('/user', createUserController.handle)
router.post('/login', authenticateUserController.handle)

export {router}