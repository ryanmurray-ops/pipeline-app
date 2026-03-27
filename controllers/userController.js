const getUsers = (req, res) => {
    const users = [
        { id: 1, name: 'Ryan' },
        { id: 2, name: 'Alex' }
    ];

    res.json(users);
}

module.exports = { getUsers };