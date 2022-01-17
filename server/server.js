const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

// Set up the endpoints of the server for lap1 only
//server.get('/', (req,res) => {res.send('Welcome to the webpage')});

// Set up middleware for routes
const movieRoutes = require('./routes/movieRoutes')
server.use('/movies', movieRoutes)   


//=====================================================================
 //LAP 1 
//To do: Create a route for retrieving all movies LAP1 
 // server.get('/movies/all',(req,res) => res.send(movies));

//data for LAP1 exercise 
// let movies = [
//     {title:'Terminator', yearOfPub: 1981, leadActor: 'Arnold Scwartzeneggar'},
//     {title:'Jaws', yearOfPub: 1972, leadActor: 'Richard Dreyfuss'},
//     {title:'Avengers', yearOfPub: 1992, leadActor: 'Robert Downey Junior'},
//     {title:'Pirates of the Caribbean', yearOfPub: 1997, leadActor: 'Johnny Depp'}];
    
//======================================================================

// Initialise port & server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Visit http://localhost:${port}`)
});
