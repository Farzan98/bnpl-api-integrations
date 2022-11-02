"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      merchantOrderId: {
        type: DataTypes.STRING,
      },
      paymentStatus: {
        type: DataTypes.STRING,
        default: "pending",
      },
      grandTotal: {
        type: DataTypes.FLOAT,
      },
      currency: {
        type: DataTypes.STRING,
        default: "EUR",
      },
      requestReference: {
        type: DataTypes.STRING,
      },
      redirectUrl: {
        type: DataTypes.STRING,
      },
      transactionId: {
        type: DataTypes.STRING,
      },
      tinkLinkResponse: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  Order.addHook("beforeSave", async (obj) => {
    return (obj.id = uuidv4());
  });
  return Order;
};
