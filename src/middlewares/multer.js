const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        const dirFile = path.join(__dirname, "..", "..", "public", "img");
        cb(null, dirFile);
    },
    filename: (req,file,cb) => {
        const fileImg = "img-" + Date.now() + path.extname(file.originalname);
        cb(null, fileImg);
    }
});

const upload = multer({storage});

module.exports = upload;