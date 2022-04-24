module.exports = (sequelize, DataTypes) => {

cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order: {
        type: DataTypes.INTEGER
    },
};

let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
};

const Sale = sequelize.define("Sale", cols, config);

Sale.associate = function(models){
    Sale.hasMany(models.Product, {
        as: "Product",
        foreignKey: "Product_id"
    });
};

Sale.associate = function(models){
    Sale.hasMany(models.User, {
        as: "User",
        foreignKey: "User_id"
    });
};

return Sale;
};