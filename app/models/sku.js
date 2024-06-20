// sku.js
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class SKU extends Model {
    static associate(models) {
      // define association here
    }
  }

  SKU.init({
    firstName: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   isEmail: true,
      // },
    },
  }, {
    sequelize,
    modelName: 'SKU',
    tableName: 'skus',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  return SKU;
};
