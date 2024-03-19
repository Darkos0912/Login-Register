const { User } = require("../database/models");
const email = "villanudarkos@gmail.com";

// User.findAll()
//     .then(data => {
//         for(let i=0; i<data.length; i++){
//             if("villanuedarkos@gmail.com" == data[i].email){
//                 console.log(true);
//             }
//             else {
//                 console.log(false);
//             }
//         }
//     })

const emailFunction = (par) => {

    User.findAll()
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (par == data[i].email) {
                        // return true;
                        console.log(true);
                        // "El email que ingreó ya se encuentra registrado"
                        // res.status(400).json({ message: "El email que ingresó ya se encuentra registrado" });
                    }
                    else {
                        // return false;
                        console.log(false);
                        // "El email que ingresó se encuentra disponible, avance maestro"
                    }
                }
            })
}

const users = emailFunction(email);

console.log(users);
console.log("espacio")

// const userVerify = (par) => {
//     if(par == true){
//         console.log("Devolvió true pá");
//     }
//     if(par == false){
//         console.log("Devolvió false che");
//     }
// }

// console.log(userVerify(users));





// const users = () => {
//     fetch("http://localhost:4000/api/users")
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data);
//         const user = data.users;
//         console.log(user);
//         return user;
//         // const usuarios = data.users;
//         // const usuario = usuarios.filter(user => user.id == "2");
//         // console.log(usuario);
//         // return usuario
//     })
// }
// console.log(users());


// const users = () => {
//     fetch("http://localhost:4000/api/users")
//         .then(response => response.json())
//         .then(data => {
//             const usuarios = data.users;
//             const usuario = usuarios.filter(user => user.email == "villanuevadarkos@gmail.com");
//             console.log(usuario);
//         })
// }

// console.log(users());



// const userInfo = () => {
//     User.findAll()
//         .then( data => {
//             for(let i=0; i<data.length; i++){
//                 info = data[i].email;
//                 console.log(info);
//             }
//         })
// }
// console.log(userInfo());

// const users = User.findAll()
//     .then(data => {
//         let user;
//         for (let i = 0; i < data.length; i++) {
//             user = data[i].email;
//         }
//         return user;
//     })

// for (let i = 0; i < users.length; i++) {
//     if ("villanuevadarkos@gmail.com" == users[i].email) {
//         console.log("Hola, el correo ya existe.");
//     }
//     else {
//         console.log("El correo no existe, gracias por registrarse");
//     }
// }

// const functionUser = (dato) => {
//         User.findAll()
//             .then(data => {
//                 for (let i = 0; i < data.length; i++) {
//                     if (dato == data[i].email) {
//                         console.log(true);
//                         break;
//                     }
//                 }
//                 console.log(true);
//             });
//     }

// console.log(functionUser("villanadarkos@gmail.com"));

// const fetchUser = () => {
//     fetch("http://localhost:4000/api/users")
//         .then(response => response.json())
//         .then(data => {
//             const user = data.users;
//             console.log(user);
//             return user;
//         })
// }

// console.log(fetchUser());

