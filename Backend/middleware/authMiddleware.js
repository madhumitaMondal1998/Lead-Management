const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/jwt");

exports.authmiddleware = (req, res, next) => {
  console.log("here");

  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send("token is not provide");
  }
  console.log("token", req.headers.authorization);

  jwt.verify(token, JWT_SECRET, (err, decode) => {
    console.log("before decode", decode);
    if (err) {
      res.status(401).send("authentication failed");
    }
    console.log("after decode", decode);

    req.user = decode;
    next();
  });
};
