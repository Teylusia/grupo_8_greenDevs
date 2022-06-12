module.exports = (sequelize, DataTypes) => {

let cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
     product_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
    
    category_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },

};

let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false,
    tableName:  "products_Categories"
    
};

const Product_Category = sequelize.define("Product_Category", cols, config);

Product_Category.associate = function(models){
    Product_Category.belongsTo(models.Product, {
        as: "Product",
        foreignKey: "product_id",
        onDelete: "CASCADE"
    });
};


return Product_Category;
};