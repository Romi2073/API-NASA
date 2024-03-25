document.querySelector('button').addEventListener('click', getImagesByDate)


function getImagesByDate() {
    const choice = document.querySelector('input').value
    console.log(choice);
    const url = `https://api.nasa.gov/planetary/apod?api_key=kBma1GvOcRws3yF58vrbYGNjoQJmHd1NrR6JaE9b&date=${choice}`;

    fetch(url)
    .then(res => res.json())
        .then(data => {
            //console.log(data);
            document.querySelector('h2').innerText = data.title
            document.querySelector('img').src = data.hdurl
            document.querySelector('h3').innerText = data.explanation
        })

        .catch(err => {
            console.log(`error ${err}`)
        })
}



