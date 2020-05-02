"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "created", {
      type: Sequelize.BOOLEAN
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("users", "created", {
      type: Sequelize.BOOLEAN
    });
  }
};
