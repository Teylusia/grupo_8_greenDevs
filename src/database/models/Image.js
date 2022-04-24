module.exports = (sequelize, DataTypes) => {

let cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING
    },
};

let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
};

const Image = sequelize.define("Image", cols, config);

Image.associate = function(models){
    Image.hasMany(models.Product, {
        as: "Product",
        foreignKey: "Product_id"
    });
};

return Image;
};