module.exports = (sequelize, dataTypes) => {

cols = {
    id: {
        type: dataTypes.INTEGER
    },
    name: {
        type: dataTypes.STRING(100)
    },
    price: {
        type: dataTypes.INTEGER
    },
    specs: {
        type: dataTypes.STRING //dataTypes: STRING corresponde a un VARCHAR(255)
    },
    description: {
        type: dataTypes.STRING
    },
    rating: {
        type: dataTypes.INTEGER
    },
    discount: {
        type: dataTypes.INTEGER
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