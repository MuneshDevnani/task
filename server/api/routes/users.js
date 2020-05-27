const express = require('express');
const router = express.Router();

const UserController= require('../controls/user');

router.post('/signup', UserController.user_signup);

// router.get('/:userId', UserController.user_account);

router.get('/allUsers', UserController.user_AllUsers)

router.post('/login' , UserController.user_login);

router.delete("/:userId" , UserController.user_delete);

module.exports = router;