module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    'Article',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      favoriteUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      published: {
        type: DataTypes.DATEONLY
      },
      updated: {
        type: DataTypes.DATEONLY
      },
    },
    {
      underscore: true,
      timestamps: false,
      tableName: 'articles',
    },
  );

  return Article;
};
