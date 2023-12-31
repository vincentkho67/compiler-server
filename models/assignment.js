'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Assignment.belongsToMany(models.User,{through: models.UserAssignment, foreignKey: 'assignment_id'})
    }
  }
  Assignment.init({
    name: DataTypes.STRING,
    context: DataTypes.STRING,
    test_cases: DataTypes.STRING,
    display: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Assignment',
  });
  return Assignment;
};