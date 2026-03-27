const express = require('express');
const router = express.Router();

const { getUsers, getUserById } = require('../controllers/userController')

router.get('/', getUsers); // /users
router.get('/:id', getUserById) // /users/:id

module.exports = router;