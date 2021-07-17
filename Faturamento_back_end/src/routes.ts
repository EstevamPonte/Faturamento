import { Router } from "express";
import { ListControlController } from "./controller/Control/ListControlController";
import { CreateSpendingsController } from "./controller/Spendings/CreateSpendingsController";
import { ListStatusController } from "./controller/Status/ListStatusController";
import { AuthenticateUserController } from "./controller/Users/AuthenticateUserController";
import { CreateUserController } from "./controller/Users/CreateUserController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";

const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

const listStatusController = new ListStatusController()

const listControlController = new ListControlController()

const createSpendingsController = new CreateSpendingsController()

router.post('/user', createUserController.handle)
router.post('/login', authenticateUserController.handle)

router.get('/status', ensureAuthenticate, listStatusController.handle)

router.get('/control', ensureAuthenticate, listControlController.handle)

router.post('/spending/:id', ensureAuthenticate, createSpendingsController.handle)

export {router}