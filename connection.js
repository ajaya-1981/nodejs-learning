const mongoose = require('mongoose');
//mongoose.set("strictQuery", true);

// connection
const uri = 'mongodb+srv://ajaya:Hello1234@cluster0.ew2n8.mongodb.net/blog?retryWrites=true&w=majority'; // Replace with your MongoDB Atlas URI
async function connectMongoDB() {
    return mongoose.connect(uri)
        .then(() => console.log('MongoDB connected with Mongoose!'))
        .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = { connectMongoDB }
 
