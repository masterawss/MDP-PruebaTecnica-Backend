import app from './app'
import dbInit from './db/init'

import * as dotenv from 'dotenv';

dotenv.config();

dbInit()

app.listen(
    process.env.PORT, 
    () => console.log(`Server started on port ${process.env.PORT}`)
)