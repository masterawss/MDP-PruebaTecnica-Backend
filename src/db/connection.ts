import {Sequelize} from 'sequelize'

import * as dotenv from 'dotenv';
dotenv.config();
  
// const sequelize = new Sequelize(
//     process.env.DB_NAME!,
//     process.env.DB_USERNAME!,
//     process.env.DB_PASSWORD, 
//     {
//         dialect: 'postgres',
//         host: process.env.HOST!
//     }
// );

const sequelize = new Sequelize({
    database: process.env.DB_NAME!,
    username:  process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST!,
    port: +process.env.DB_PORT!,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  });

// const sequelize = new Sequelize(process.env.DATABASE_URL!, {"dialectOptions": {
//     "ssl": true
//   }})

export default sequelize