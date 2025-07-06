import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("software2", "postgres", "Fe984260252", {
    host: "localhost",
    port: 5432,
    dialect: "postgres"
});