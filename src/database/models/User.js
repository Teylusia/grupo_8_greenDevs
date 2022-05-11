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
    email: {
        type: DataTypes.STRING(100)
    },
    avatar: {
        type: DataTypes.STRING(100)
    },
    password: {
        type: DataTypes.STRING
    },
    privilege: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.INTEGER
    },
};

let config = {
    tableName:'Users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false
};

const User = sequelize.define("User", cols, config);

User.associate = function(models){
    User.hasMany(models.Sale, {
        as: "Sale",
        foreignKey: "users_id"
    });
}

return User;
};