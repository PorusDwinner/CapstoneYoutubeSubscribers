const mongoose = require('mongoose');
const request = require('supertest');
const expect = require('chai').expect;
const app = require('D:/React Project/CAPSTONE BACKEND/Backend Youtube Subscribers/app');
const connectionString = 'mongodb://localhost/subscribers';

// Connect with database before each test
beforeEach(async () => {
    await mongoose.connect(connectionString, {
        useNewUrlParser : true , useUnifiedTopology : true
    })
});

// Disconnect with database after completion of test
afterEach(async () => {
    await mongoose.connection.close()
});

// GET Method
// When API is responding the it will respond status code 200
// We can check with the length of res.body.length > 0

describe('GET /subscribers', () => {
    it('if returning array of subscribers', async() => {
        const res = await request(app).get('/subscribers');
        expect(res.statusCode).to.equal(200);
        expect(res.body.length).to.be.gt(0);
    });
});

// GET Method
// When API is responding the it will respond status code 200
// We can check with the length of res.body.length > 0

describe('GET /subscribers/names', () => {
    it('if returning array of subscribers with name and subscribed channel', async() => {
        const res = await request(app).get('/subscribers/names');
        expect(res.statusCode).to.equal(200);
        expect(res.body.length).to.be.gt(0);
    });
});

// GET Method
// When API is responding the it will respond status code 200
// We can check with the length of res.body.length > 0

describe('GET /subscribers/:id', () => {
    it('if returning array of subscribers with name and subscribed channel', async() => {
        const res = await request(app).get('/subscribers/6401e11e2cf8765a315f9b0a');
        expect(res.statusCode).to.equal(200);
        expect(res.body._id).to.equal('6401e11e2cf8765a315f9b0a')
    });
});

describe('GET /', () => {
    it('if returning index.html', async() => {
        const res = await request(app).get('/');
        expect(res.statusCode).to.equal(200);
    });
});