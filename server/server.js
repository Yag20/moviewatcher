const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());

// Set up the endpoints of the server
server.get('/', (req,res) => {res.send('Welcome to the webpage')});







// Initialise port & server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Visit http://localhost:${port}`)
});
