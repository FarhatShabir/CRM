const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { ACCESS_TOKEN_SECRET } = require("../../config")

const password ="$2a$12$fnlGlFhD3P4/99uUgMcI8OT4qYgd7gfNogwMEU01V4LsjVaa.EVYu"
const username='admin admin'

class authController {
  constructor() { }

  static login(req, res) {
    if (req.body.email == "admin@gmail.com") {
      bcrypt.compare(req.body.password, password, function (err, result) {
        if (err) {
          return res.status(500).json({ msg: "Authentication failed" }); //check error code
        }
        if (result) {
          const accessToken = jwt.sign(req.body.email, ACCESS_TOKEN_SECRET);
          return res.status(200).json({ message: "logged in successfully", accessToken ,username:username});
        }
        res.status(401).json({ message: "Invalid password" });
      });
    } else res.status(401).json({ message: "Invalid Email" });
  }

  // static securePassword= async(password)=>{
  //     const securePassword= await bcrypt.hash(password,10)
  //     console.log(securePassword)
  // }
}

module.exports = authController;
