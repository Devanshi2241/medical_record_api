const express = require('express')
const router = express.Router();

const {signup,login,logout} = require("./userController.js");
const checkAuth = require("./check-auth.js");



router.route("/signup").post(signup);
router.route('/login').post(login);
router.route("/:userId/logout").get(checkAuth,logout);





module.exports = router;