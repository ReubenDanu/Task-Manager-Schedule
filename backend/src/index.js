const express = require('express');
const app = express();
const port = 3000;

let route = require('../routes/routes.js');

app.use('/task-manager', route)

app.listen(port, function (err) {
    if (err) {
        console.log("something happening!");
        return 0;
    }
    console.log("server running on port ", port)
})

/*
what i do?
-create a routing apps
-determine the path routing 
task-manager/
task-manager/:id/
task-manager/:id/
-make a controller callback to the route

*/
