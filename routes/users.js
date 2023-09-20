var express = require('express');
var router = express.Router();
const usersController = require("../controller/usersController");

/* GET users listing. */
router.post('/register', usersController.usersRegister);
router.post('/login', usersController.usersLogin);
router.post('/forgotPassword', usersController.usersForgotPassword);
module.exports = router;
