module.exports = (sequelize, dataTypes) => {

let cols = {
    id: {
        type: dataTypes.INTEGER
    },
};

let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
};

const Product_Category = sequelize.define("Product_Category", cols, config);

Product_Category.associate = function(models){
    Product_Category.hasMany(models.Product, {
        as: "Product",
        foreignKey: "Product_id"
    });
};

Product_Category.associate = function(models){
    Product_Category.belongsTo(models.Category, {
        as: "Category",
        foreignKey: "Category_id"
    });
};

return Product_Category;
};