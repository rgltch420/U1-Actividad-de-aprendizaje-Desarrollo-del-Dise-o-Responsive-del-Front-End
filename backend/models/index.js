// backend/models/index.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

const Product = require('./Product')(sequelize);
const User = require('./User')(sequelize);

sequelize.sync();

module.exports = { sequelize, Product, User };
