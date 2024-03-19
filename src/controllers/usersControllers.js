const users = {
    login: (req,res) => {
        res.render("login");
    },
    actLogin: (req,res) => {
        res.redirect("profile");
    },
    register: (req,res) => {
        res.render("register");
    },
    actRegister: (req,res) => {
        res.redirect("login");
    },
    profile: (req,res) => {

        const userLogged = req.session.userLogged;

        res.render("profile", {data: userLogged});
    },
    logout: (req,res) => {
        req.session.destroy();
        res.redirect("login");
    }
}

module.exports = users;