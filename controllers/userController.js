const users = [
        { id: 1, name: 'Ryan' },
        { id: 2, name: 'Alex' }
    ];

const getUsers = (req, res) => {
    // Return the full list of users as a JSON
    res.json(users);
}

const getUserById = (req, res, next) => {
    // Find user that matches the ID from the route
    const foundUser = users.find(user => user.id === Number(req.params.id));

    // If user doesn't exist, pass an error ro wrror-handling middleware
    if (!foundUser) {
        return next(new Error('User not found'))
    }

    // If user exists =, send it as JSON
    res.json(foundUser);
};

// Export the functions so routes can use them
module.exports = { getUsers, getUserById };