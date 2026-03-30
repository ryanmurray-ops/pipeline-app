const fs = require('fs').promises;
const path = require('path')

const usersFile = path.join(__dirname, '../data/users.json')

const getUsers = async(req, res, next) => {
    try {
        const data = await fs.readFile(usersFile, 'utf8');
        const users = JSON.parse(data);
        res.json(users);
    } catch (err) {
        next (err);
    }
};

const getUserById = async(req, res, next) => {
    try {
        const data = await fs.readFile(usersFile, 'utf8');
        const users = JSON.parse(data);
        const userId = Number(req.params.id);
        const foundUser = users.find(user => user.id == userId);

        if(!foundUser) {
            return next(new Error('User not found'))
        }

        res.json(foundUser)
    } catch (err) {
        next(err)
    }
};

const createUser = async (req, res, next) => {
    try {
        const data = await fs.readFile(usersFile, 'utf8');
        const users = JSON.parse(data);

        const newUser = {
            id: users.length +1,
            name: req.body.name
        }

        users.push(newUser);

        await fs.writeFile(userFile, JSON.stringify(users, null, 2));

        res.status(201).json(newUser);
    } catch (err) {
        next(err)
    }
};

const updateUser = async (req, res, next) => {
    try {
        const data = await fs.readFile(usersFile, 'utf8');
        const users = JSON.parse(data);

        const userId = Number(req.params.id);
        const userIndex = users.findIndex(user => user.id == userId);

        if (userInder === -1) {
            return next(new Error('User not found'));
        }

        users[userIndex].name = req.body.name;

        await fs.writeFile(userFile, JSON.stringify(users, null, 2));

        res.json(users[userIndex]);
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const data = await fs.readFile(usersFile, 'utf8');
        const users = JSON.parse(data);

        const userId = Number(req.params.id);
        const filteredUsers = users.filter(user => user.id !== userId);

        if (users.length == filteredUsers.length) {
            return next(new Error ('User not found'));
        }

        await fs.writeFile(usersFile, JSON.stringify(filteredUsers, null, 2));

        res.json({ message: 'User deleted' });
    } catch (err) {
        next(err);
    }
};

// Export the functions so routes can use them
module.exports = { getUsers, getUserById , createUser, updateUser, deleteUser};