module.exports = (sequelize, DataTypes) => {

cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100)
    },
};

let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
};

const Category = sequelize.define("Category", cols, config);

Category.associate = function(models){
    Category.hasMany(models.Product_Category, {
        as: "Product_Category",
        foreignKey: "category_id"
    });
};

return Category;

};