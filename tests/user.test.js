const request = require('supertest'); // Supertest kets us simulate HTTP requests
const app = require('../index'); // Import the Express app without starting the server

describe('User API', () => {

    it('GET /status should return API status', async () => {
        const res = await request(app).get('/status');

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status');
        expect(res.body.status).toBe('ok');
        expect(res.body).toHaveProperty('timestamp');
    });


    it ('GET /users should return an array of users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
    });

    it ('GET /users/:id should return a single user', async () => {
        const resAll = await request(app).get('/users'); // Get all users
        const userId = resAll.body[0]?.id || 1; // Pick the first users ID if available else fallback to 1
        const res = await request(app).get(`/users/${userId}`); // Send GET request to /users/:id
        expect(res.statusCode).toBe(200); 
        expect(res.body).toHaveProperty('id', userId);
        expect(res.body).toHaveProperty('name');
    });

    it ('POST /users should create a new user', async () => {
        const newUser = { name: 'TestUser' };
        const res = await request(app)
            .post('/users') // Sends a POST request to the endpoint (create a new user)
            .send(newUser) // Sends the data we want to create
            .set('Accept', 'application/json'); // Tells the server we expect the response to be in JSON format
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('name', 'TestUser');
    })

    it ('PUT /users/:id should update a user', async () => {
        const resAll = await request(app).get('/users');
        const userId = resAll.body[0]?.id || 1; // Pick the first users ID if available else fallback to 1
        const updatedName = { name: 'UpdatedUser' };
        const res = await request(app)
            .put(`/users/${userId}`) // Sends a PUT request to the endpoint for a specific user ID (update this user)
            .send(updatedName) // Sends the data we want to update
            .set('Accept', 'application/json'); // Tells the server we expect the response to be in JSON format
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('id', userId);
            expect(res.body).toHaveProperty('name', 'UpdatedUser');
    });

    it ('DELETE /users/:id shoudl remove a user', async () => {
        const resAll = await request(app).get('/users');
        const userId = resAll.body[0]?.id || 1; // Pick the first users ID if available else fallback to 1
        const res = await request(app).delete(`/users/${userId}`)
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('message', 'User deleted');
    })
});