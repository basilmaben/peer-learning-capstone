/**
 *  model for uploading any notes, pdf files, etc.
 */

export default (sequelize, Sequelize) => {
  const DataTypes = Sequelize.DataTypes;
  const Resource = sequelize.define('resource', {
    url: { type: DataTypes.STRING(200), allowNull: false, unique: true, default: "" },
    type: {type: DataTypes.STRING(10), default: "Image", allowNull: "false" , default: ""},
    size: {type: DataTypes.INTEGER(), allowNull: false, default: 0},
    description: {type: DataTypes.TEXT(), allowNull: false, default: "lorem"},
    publicid: {type: DataTypes.STRING(50), allowNull: true}

  });
  return Resource;
};
