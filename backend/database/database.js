import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("ejemplodemo", "postgres", "landa999", {
    host: "localhost",
    dialect: "postgres"
});