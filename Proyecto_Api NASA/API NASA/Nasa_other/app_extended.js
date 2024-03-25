document.querySelector('#button').addEventListener('click', getAsteroid);

function getAsteroid() {
    const asteroidSelect = document.getElementById('asteroidSelect');
    const asteroidId = asteroidSelect.value;
    const apiKey = 'kBma1GvOcRws3yF58vrbYGNjoQJmHd1NrR6JaE9b';
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('h2').innerText = data.name;
            document.querySelector('h3').innerText = data.id;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Link dinámico NASA

const nasaJplUrl = 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/'; 

const nasaJplUrlSection = document.querySelector('#nasaJplUrlSection');

const linkElement = document.createElement('a');
linkElement.href = nasaJplUrl;
linkElement.textContent = 'Ver más información en la NASA - LOOKUP';

nasaJplUrlSection.appendChild(linkElement);


