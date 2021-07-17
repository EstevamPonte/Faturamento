import { Router } from "express";
import { ListStatusController } from "./controller/Status/ListStatusController";
import { AuthenticateUserController } from "./controller/Users/AuthenticateUserController";
import { CreateUserController } from "./controller/Users/CreateUserController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";

const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

const listStatusController = new ListStatusController()


router.post('/user', createUserController.handle)
router.post('/login', authenticateUserController.handle)

router.get('/status', ensureAuthenticate, listStatusController.handle)

export {router}