const myForm = document.querySelector('#post'); //submit button in modal form 
myForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = e.target.title.value;
    const yearOfPublication  = e.target.yearOfPublication.value;
    const leadActor = e.target.leadActor.value;
    postFilm(title, yearOfPublication, leadActor);
});

async function postFilm(new_title, new_yearOfPublication, new_leadActor){
    try {
        const post = {title: new_title, yearOfPublication: new_yearOfPublication, leadActor: new_leadActor};
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        };
        const response = await fetch('http://localhost:3000/movies', options);
        const data = await response.json();
     //   window.open(window.location.href.slice(0, -11) + `/posts.html?id=${data._id}`, '_self'); // opens in new window with returned id reference 
    } catch (err) {
        console.warn(err);
    };
};