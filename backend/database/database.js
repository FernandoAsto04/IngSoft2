import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("db_software2", "postgres", "fgf160911", {
    host: "localhost",
    port: 5432,
    dialect: "postgres"
});