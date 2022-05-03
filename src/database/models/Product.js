const { Sequelize } = require('sequelize');

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
    price: {
        type: DataTypes.INTEGER
    },
    specs: {
        type: DataTypes.STRING //dataTypes: STRING corresponde a un VARCHAR(255)
    },
    description: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    },
    discount: {
        type: DataTypes.INTEGER
    },
};

let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
};

const Product = sequelize.define("Product", cols, config);

Product.associate = function(models){
    Product.belongsTo(models.Sale, {
        as: "Sale",
        foreignKey: "Product_id"
    });
};

Product.associate = function(models){
    Product.belongsTo(models.Image, {
        as: "Image",
        foreignKey: "Product_id"
    });
};

Product.associate = function(models){
    Product.belongsTo(models.Product_Category, {
        as: "Product_Category",
        foreignKey: "Product_id"
    });
};

return Product;
};