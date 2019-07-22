const express = require('express');
const connectDB = require('./config/db');
const authRoute = require('./routes/auth');
// example route
const postRoute = require('./routes/example');

const app = express();

// connect to db
connectDB();

// allows us to accept json data into our API
app.use(express.json({ extended: false }));

// define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
