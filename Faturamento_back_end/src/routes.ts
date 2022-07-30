import { Router } from "express";
import { ListControlController } from "./controller/Control/ListControlController";
import { CreateItensController } from "./controller/Itens/CreateItensController";
import { ShowItemController } from "./controller/Itens/ShowItemController";
import { CreateSpendingsController } from "./controller/Spendings/CreateSpendingsController";
import { ListSpendingsController } from "./controller/Spendings/ListSpendingsController";
import { ListStatusController } from "./controller/Status/ListStatusController";
import { AuthenticateUserController } from "./controller/Users/AuthenticateUserController";
import { CreateUserController } from "./controller/Users/CreateUserController";
import { SendEmailController } from "./controller/Users/SendEmailController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";

const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const sendEmailController = new SendEmailController()

const listStatusController = new ListStatusController()

const listControlController = new ListControlController()

const createSpendingsController = new CreateSpendingsController()
const listSpendingsController = new ListSpendingsController()

const createItensController = new CreateItensController()
const showItenController = new ShowItemController()

router.post('/user', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.get('/send', sendEmailController.handle)

router.get('/status', ensureAuthenticate, listStatusController.handle)

router.get('/control', ensureAuthenticate, listControlController.handle)

router.post('/spending', ensureAuthenticate, createSpendingsController.handle)
router.get('/spending', ensureAuthenticate, listSpendingsController.handle)

router.post('/itens', ensureAuthenticate, createItensController.handle)
router.get('/itens/show', ensureAuthenticate, showItenController.handle)

export {router}