import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';

const Contact = sequelize.define('Contact', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobileNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Synchronize the model with the database
(async () => {
    await sequelize.sync();
})();

export default Contact;
