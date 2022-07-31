import 'reflect-metadata'
import dotenv from "dotenv"
import express, {Request, Response, NextFunction} from 'express'
import 'express-async-errors'

import cors from "cors"
import { router } from './routes'
import './database'

dotenv.config()
const app = express()

app.use(cors())

app.use(express.json())
app.use(router)

app.use((err: Error, req: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})


app.listen(process.env.PORT || 3003, () => console.log("Server is running"))