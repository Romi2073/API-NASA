window.addEventListener('load', getImages);

const updateButton = document.getElementById('updateButton');
updateButton.addEventListener('click', getImages);


function getImages() {

    const Api_key = 'kBma1GvOcRws3yF58vrbYGNjoQJmHd1NrR6JaE9b';
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Api_key}&count=10`;
   


    fetch(ruta)
        .then(answer => answer.json())
        .then(results => showImages(results));
        console.log(results)
}

function showImages(imagesData) {
    const gallery = document.querySelector('#gallery');
    gallery.innerHTML = '';

    imagesData.forEach(({ date, explanation, title, url }) => {
        gallery.innerHTML += `
        <h3 id="titulo" class="text-xl-center">${title}</h3>
        <p id="fecha" class="text-center">${date}</p>
        <h5 id="descripcion" class="font-weigth-normal background-color: rgba(255, 255, 255, 0.8)">${explanation}</h5>
        <img src="${url}" class="image-fluid rounded mx-auto pt-4" alt="${url}">`;
    });
}

// Search por fecha --- > Redireccionar
document.addEventListener('DOMContentLoaded', function() {
    const buscarBtn = document.querySelector('#searchDate');
    buscarBtn.addEventListener('click', function() {

        window.location.href = '/API NASA/Nasa_date/index_ext.html';
    });
});

// Search asteroides y cometas ---> Redireccionar

document.addEventListener('DOMContentLoaded', function() {
    const buscarBtn = document.querySelector('#searchNEO');
    buscarBtn.addEventListener('click', function() {

        window.location.href = '/API NASA/Nasa_other/index_extended.html';
    });
});


