const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json')



app.listen(port, () => {
    console.log('Platinam server runing on port', port);
}) 