import { Sequelize } from 'sequelize';

// Create a new instance of Sequelize
const sequelize = new Sequelize('egniol', 'root', '168179', {
    host: 'localhost', // Your database host
    dialect: 'mysql',
});

export default sequelize;
