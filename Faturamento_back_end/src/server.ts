import dotenv from "dotenv"
dotenv.config()
import 'reflect-metadata'
import express, {Request, Response, NextFunction} from 'express'
import 'express-async-errors'
import { Client } from 'pg'

import cors from "cors"
import { router } from './routes'
import './database'

const app = express()

app.use(cors())

app.use(express.json())
app.use(router)

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

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