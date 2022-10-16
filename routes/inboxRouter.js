//external imports
const express = require('express');
const {getInbox} = require("../controller/inboxController")
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse')

const router = express.Router();
console.log("inbox router");
//login page
router.get('/',decorateHtmlResponse('inbox'), getInbox);

module.exports = router;