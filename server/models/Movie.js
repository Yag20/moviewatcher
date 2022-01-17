const db = require('../dbConfig/init');

// const Author = require('./Author');

module.exports = class Movie {
    constructor(data){
        this.movieid = data.movie_id;
        this.title = data.title;
        this.yearOfPublication = data.year_of_publication;
        this.leadActor = data.lead_actor
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let movieData = await db.query('SELECT movie_id, title, year_of_publication, lead_actor FROM movies;');
                let movies = movieData.rows.map(b => new Movie(b));
                resolve (movies);
            } catch (err) {
                reject('Films not found ');
            }
        });
    };

    
    // Not needed find a film 
    // static findById(id){
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             let movieData = await db.query(`SELECT *
    //                                                 FROM movies
    //                                                 WHERE movie_id = $1;`, [ id ]);
    //             let movie = new Book(movieData.rows[0]);
    //             resolve (movie);
    //         } catch (err) {
    //             reject('Film not found');
    //         }
    //     });
    // };
    
    static async create(movieData){
        return new Promise (async (resolve, reject) => {
            try {
                let result = await db.query('INSERT INTO movies (title, year_of_publication, lead_actor)  VALUES ($1, $2, $3)  RETURNING movie_id;', [title, yearOfPublication, leadActor]); //new line added 
                const { title, yearOfPublication, leadActor} = movieData;
                resolve (result.rows[0]);
            } catch (err) {
                reject('Film could not be created');
            }
        });
    };

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.query('DELETE FROM movies WHERE id = $1 RETURNING author_id;', [ this.id ]);
                const books = await author.books;
                if(!books.length){await author.destroy()}
                resolve('Film was deleted')
            } catch (err) {
                reject('Film could not be deleted')
            }
        })
    };
};