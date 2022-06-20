module.exports = (sequelize, DataTypes) => {

cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    users_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
    order_number: {
        type: DataTypes.INTEGER
    }
};

let config = {
    tableName:'sales',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false,
    
};

const Sale = sequelize.define("Sale", cols, config);

Sale.associate = function(models){
    Sale.belongsTo(models.Product, {
        as: "Product",
        foreignKey: "product_id",
        onDelete: 'CASCADE'
    });
};

Sale.associate = function(models){
    Sale.belongsTo(models.User, {
        as: "User",
        foreignKey: "users_id",
        onDelete: 'CASCADE'
    });
};
return Sale;
};