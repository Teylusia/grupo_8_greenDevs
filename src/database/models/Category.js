module.exports = (sequelize, dataTypes) => {

cols = {
    id: {
        type: dataTypes.INTEGER
    },
    name: {
        type: dataTypes.STRING(100)
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
        foreignKey: "Category_id"
    });
};

return Category;

};