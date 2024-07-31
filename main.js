const informacionButton = document.querySelector('#informacionButton');
const informacion = document.querySelector('.informacion');
const informacionCloseButton = document.querySelector('#informacion-close-button');

const personajesButton = document.querySelector('#personajesButton');
const personajes = document.querySelector('.personajes');
const personajesCloseButton = document.querySelector('#personajes-close-button');

const nightCityButton = document.querySelector('#nightCityButton');
const nightCity = document.querySelector('.night-city');
const nightCityCloseButton = document.querySelector('#night-city-close-button');

const historiaButton = document.querySelector('#historiaButton');
const historia = document.querySelector('.historia');
const historiaCloseButton = document.querySelector('#historia-close-button');



informacionButton.addEventListener('click', () => {
    informacion.classList.add('informacion-active')
});

informacionCloseButton.addEventListener("click", () => {
    informacion.classList.remove('informacion-active')
})


personajesButton.addEventListener('click', () => {
    personajes.classList.add('personajes-active')
});

personajesCloseButton.addEventListener("click", () => {
    personajes.classList.remove('personajes-active')
})

nightCityButton.addEventListener('click', () => {
    nightCity.classList.add('night-city-active')
});

nightCityCloseButton.addEventListener("click", () => {
    nightCity.classList.remove('night-city-active')
})

historiaButton.addEventListener('click', () => {
    historia.classList.add('historia-active')
});

historiaCloseButton.addEventListener("click", () => {
    historia.classList.remove('historia-active')
})