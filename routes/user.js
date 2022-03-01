const express = require('express');
const router = express.Router();
const {createUser,userSignIn} = require('../controllers/user');
const {validateUserSignUp, userValidation, validateUserSignIn} = require('../middlewares/validation/user');

router.post('/registration', validateUserSignUp, userValidation , createUser);
router.post('/login', validateUserSignIn,userValidation, userSignIn);

module.exports = router;