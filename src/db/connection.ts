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

const sequelize = new Sequelize(process.env.DATABASE_URL!)

export default sequelize