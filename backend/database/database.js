import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("postgres", "postgres", "12345", {
    host: "localhost",
    dialect: "postgres"
});