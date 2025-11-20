/* Aquí va la lógica para mostrar los resultados de búsqueda */

//Fetch de datos.json para pagina Empleos
const container = document.querySelector(".jobs-listings");

const RESULTS_PER_PAGE = 3;

fetch("./data.json") /* fetch es asíncrono */
    .then((response) => {
        return response.json();
    })
    .then((jobs) => {
        jobs.forEach((job) => {
            const listItems = document.createElement("li");
            const article = document.createElement("article");
            listItems.innerHTML = article;

            article.className = "job-listing-card";
            article.dataset.modalidad = job.data.modalidad;
            article.dataset.nivel = job.data.nivel;
            article.dataset.technology = job.data.technology;
            article.dataset.title = job.titulo;

            article.innerHTML = `<div>
                <h3>${job.titulo}</h3>
                <small>${job.empresa} | ${job.ubicacion}</small>
                <p>${job.descripcion}</p>
            </div>
        <button class="button-apply-job">Aplicar</button>`;

            container.appendChild(article);
        });
    });
