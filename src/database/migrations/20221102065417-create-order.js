"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      merchantOrderId: {
        type: Sequelize.STRING,
      },
      paymentStatus: {
        type: Sequelize.STRING,
        default: "pending",
      },
      grandTotal: {
        type: Sequelize.FLOAT,
      },
      currency: {
        type: Sequelize.STRING,
        default: "EUR",
      },
      requestReference: {
        type: Sequelize.STRING,
      },
      redirectUrl: {
        type: Sequelize.STRING,
      },
      transactionId: {
        type: Sequelize.STRING,
      },
      tinkLinkResponse: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
