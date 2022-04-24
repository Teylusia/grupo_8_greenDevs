module.exports = (sequelize, dataTypes) => {

let cols = {
    id: {
        type: dataTypes.INTEGER
    },
    url: {
        type: dataTypes.STRING
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
    Sale.hasMany(models.Product, {
        as: "Product",
        foreignKey: "Product_id"
    });
};

return Image;
};