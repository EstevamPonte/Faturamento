import { createConnection } from 'typeorm'

createConnection({type: 'postgres', url: process.env.DATABASE_URL})
