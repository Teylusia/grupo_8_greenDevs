module.exports = (sequelize, dataTypes) => {

cols = {
    id: {
        type: dataTypes.INTEGER
    },
    name: {
        type: dataTypes.STRING(100)
    },
    avatar: {
        type: dataTypes.STRING(100)
    },
    password: {
        type: dataTypes.STRING
    },
    privilege: {
        type: dataTypes.INTEGER
    },
    status: {
        type: dataTypes.INTEGER
    },
};

let config = {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
};

const User = sequelize.define("User", cols, config);

User.associate = function(models){
    Product.belongsTo(models.Sale, {
        as: "Sale",
        foreignKey: "User_id"
    });
}

return User;
};