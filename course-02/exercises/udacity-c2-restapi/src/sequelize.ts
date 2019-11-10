import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';

// This filen contains all connection details to DB services
const c = config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
    "username": "udagramrajdev",
    "password": "udagramrajdev",
    "database": "udagramrajdev",
    "host":     "udagramrajdev.cykbcxsrvjqy.us-east-2.rds.amazonaws.com",

  dialect: 'postgres',
  storage: ':memory:',
});
