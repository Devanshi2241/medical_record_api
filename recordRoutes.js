const path = require('path');
const express = require('express')
const router = express.Router();

const {create_record, get_record_range,get_record_name } = require("./recordController.js");
const checkAuth = require("./check-auth.js");





//routes
router.route("/:userId/addrecord").post(checkAuth,create_record);
router.route("/:userId/range").get(checkAuth,get_record_range);
router.route("/:userId/name").get(checkAuth,get_record_name );




module.exports = router;