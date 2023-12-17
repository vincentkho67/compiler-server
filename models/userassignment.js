'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAssignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAssignment.belongsTo(models.User, { foreignKey: 'user_id' });
      UserAssignment.belongsTo(models.Assignment, { foreignKey: 'assignment_id' });
    }
  }
  UserAssignment.init({
    user_id: DataTypes.INTEGER,
    assignment_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserAssignment',
  });
  return UserAssignment;
};