//external imports
const express = require('express');
const {getUsers} = require("../controller/usersController")
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse')

const router = express.Router();
//login page
router.get('/',decorateHtmlResponse('users'), getUsers);
module.exports = router;