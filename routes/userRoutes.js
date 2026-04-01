const express = require('express');
const router = express.Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController')

router.get('/', getUsers); // /users
router.get('/:id', getUserById) // /users/:id

router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser)

module.exports = router;