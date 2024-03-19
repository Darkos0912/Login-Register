const {User} = require("../../database/models");

const usersController = {
    all: (req,res) => {
        User.findAll()
            .then(user => {
                result = {
                    meta: {
                        status: 200,
                        count: user.length,
                        url: "/api/users"
                    },

                    users: user
                }
                res.json(result);
            })
    },

    one: (req,res) => {
        const {id} = req.params;

        User.findByPk(id)
            .then(user => {
                result = {
                    meta: {
                        status: "200",
                        count: "1",
                        url: `/api/${id}`
                    },

                    users: user
                }
                res.json(result);
            })
    }
}

module.exports = usersController;