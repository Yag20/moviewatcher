

async function getMovies(){
    try{
       
        const response = await fetch(`http://localhost:3000/movies/all`);
        const moviesData = await response.json();
        console.log(moviesData);
        
        
        // let tablearea = document.getElementById('tablearea');
        // table = document.createElement('table');

        for (let i = 0; i < moviesData.length; i++) {
        //   movies.forEach(movie => {
          
            // var tr = document.createElement('tr');
            // tr.appendChild( document.createElement('td') );
            // tr.appendChild( document.createElement('td') );
            // tr.appendChild( document.createElement('td') );

            // tr.cells[0].appendChild(document.createTextNode(data[i].title) );

            // let dataTitle = data[i].title;
 
            // document.getElementById("title").textContent += data[i].title; 
            // document.getElementById("title").textContent += " ";  //could use innerHTML instead of textContent
            // document.getElementById("yearOfPub").textContent += data[i].yearOfPub;
            // document.getElementById("leadActor").textContent += data[i].leadActor;

             var table = document.getElementById("movieTable");
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
            
                cell1.innerHTML = moviesData[i].title;
                cell2.innerHTML = moviesData[i].yearOfPub;
                cell3.innerHTML = moviesData[i].leadActor;

        }
        let output = "here";
        moviesData.forEach(moviesData => {
            output += `${moviesData.title},
                        ${moviesData.yearOfPub},
                        ${moviesData.leadActor} `
                    });
                    console.log(output);

        document.getElementById("movieTable2").innerHTML= output;


    } catch (err) {
        console.warn(err);
    };
};

getMovies();

