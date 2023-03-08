const mongoose = require('mongoose');
const Subscriber = require('./model/subscriberSchema');
const data = require('./data');

// Connect To Database
// Make sure mongoDB is installed locally to work with the code below
const connectionString = 'mongodb://localhost/subscribers';

// Since the code below will return a promise,
// we are using .then() for resolve & .catch() for error

mongoose.connect(connectionString , {
    useNewUrlParser : true , useUnifiedTopology : true
})
.then(() => console.log('Connected...'))
.catch((err) => console.log('Failed To Connect : ', err));

// Refresh data in subscribers collection in DB
const refreshData = async() => {
    try {
        // It will delete all the data form the DB for that collection
        await Subscriber.deleteMany({},{wtimeout : 30000});
        console.log('Deleted all Subscribers');

        // It will add the new subscribers from the data.js file
        const newSubscribers = await Subscriber.insertMany(data);
        console.log(`New ${newSubscribers.length} Subscribers Added`);

    } catch(err) {
        console.log(`Failed : `, err);

    } finally {
        // Disconnecting with DB after doing above operations 
        mongoose.disconnect();
        console.log('...Disconnected');
    }
};

refreshData();