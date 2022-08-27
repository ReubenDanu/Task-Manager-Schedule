const express = require('express');
const app = express();
let route = require('../routes/routes.js');
const cors = require('cors');
require('../db/connection.js')
require('dotenv').config();

const port = process.env.PORT
// app.use(cors)
app.use('/api', route)

app.listen(port, function (err) {
    if (err) {
        throw (err)
    }
    console.log('server running on port', port)
})






/*
what i do?
-create a routing apps done
-determine the path routing done
api/
api/:id/
api/:id/
-connect database
-create model
-make a controller callback to the route

*/
