// In this file we describe how out model would look like
// Here we don't use any dependencies

export default ({ dbTypes }) => ({
  id: {
    type: dbTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userOneId: {
    type: dbTypes.INTEGER,
    allowNull: false
  },
  userTwoId: {
    type: dbTypes.INTEGER,
    allowNull: false
  }
});
