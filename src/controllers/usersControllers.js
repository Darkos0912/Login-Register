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
        res.render("profile");
    },
    logout: (req,res) => {
        res.redirect("login");
    }
}

module.exports = users;