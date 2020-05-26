'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("messages", "conversationId", "roomId");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("messages", "roomId", "conversationId");
  }
};
