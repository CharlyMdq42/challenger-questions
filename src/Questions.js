
import fetch from 'node-fetch';

fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
  .then(response => response.json())
  .then(data => {
    const preguntas = data.results;

    const contenedorPreguntas = document.getElementById('preguntas');

    preguntas.forEach(pregunta => {
      const elementoPregunta = document.createElement('p');
      elementoPregunta.textContent = pregunta.question;
      contenedorPreguntas.appendChild(elementoPregunta);
    });
  })
  .catch(error => console.error(error));