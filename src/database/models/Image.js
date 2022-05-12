module.exports = (sequelize, DataTypes) => {

let cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    address: {
        type: DataTypes.STRING
    },
    product_id: {
        type: DataTypes.INTEGER,
        foreignKey: true
    }
};

let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
};

const Image = sequelize.define("Image", cols, config);

Image.associate = function(models){
    Image.belongsTo(models.Product, {
        as: "Product",
        foreignKey: "product_id",
        onDelete: 'CASCADE'
    });

};

return Image;
};