export default ({ dbTypes }) => ({
  id: {
    type: dbTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: { type: dbTypes.INTEGER, allowNull: false },
  conversationId: { type: dbTypes.INTEGER, allowNull: false },
  text: { type: dbTypes.String, allowNull: false }
});
