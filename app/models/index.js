import { Sequelize } from 'sequelize';
import sku from './sku.js'


const sequelize = new Sequelize('product_SKU', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  SKU: sku(sequelize), // Initialize the SKU model
};

//   db.User.hasOne(db.Session, { foreignKey: { name: 'user_id', allowNull: false } })
//   db.Session.belongsTo(db.User, { foreignKey: { name: 'user_id', allowNull: false } })


db.sequelize.sync({ alter: true, }).then(() => { console.log('Yes re-sync') })



export default db;