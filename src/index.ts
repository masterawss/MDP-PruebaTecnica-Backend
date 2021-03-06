import app from './app'

import dbInit from './db/init'
dbInit()

import * as dotenv from 'dotenv';
dotenv.config();

app.listen(
    process.env.PORT, 
    () => console.log(`Server started on port ${process.env.PORT}`)
)