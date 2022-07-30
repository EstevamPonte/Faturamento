import { Request, Response } from "express";
import { SendEmailServices } from "../../services/Users/SendEmailServices"

class SendEmailController {
  async handle(request: Request, response: Response) {
    const sendEmailServices = new SendEmailServices()
    const email = await sendEmailServices.execute()
    return response.json({email})
  }
}

export {SendEmailController}