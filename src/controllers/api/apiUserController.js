const db = require("../../database/models");

const usersControllerApi = {
  list: (req, res) => {
    let users = db.User.findAll().then((users) => {
      return res.status(200).json({
        count: users.length,
        users : users.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                detail: "/user/edit/"+ `${user.id}`
            }
        })
      });
    });
  },



  detail: (req, res) => {
    db.User.findByPk(req.params.id, {
    })
    .then((user) => {
        res.status(200).json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            avatar: `${user.avatar}`
        })
    })
    
  },
};

module.exports = usersControllerApi;
