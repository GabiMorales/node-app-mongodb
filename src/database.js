const mongoose = require('mongoose')

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGO_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGO_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(db => console.log('database is connect to'))
.catch(err => console.log(err));