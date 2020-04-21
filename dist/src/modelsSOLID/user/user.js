export default dbTypes => ({
  id: {
    type: dbTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: { type: dbTypes.STRING, allowNull: false },
  email: { type: dbTypes.STRING, allowNull: false },
  password: { type: dbTypes.STRING, allowNull: false }
});
