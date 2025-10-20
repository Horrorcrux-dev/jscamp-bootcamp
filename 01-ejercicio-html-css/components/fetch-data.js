//Fetch de datos.json para pagina Empleos

const container = document.querySelector(".jobs-listings");
fetch("../lib/data.json") //fetch es asincrono
    .then((response) => {
        return response.json();
    })
    .then((jobs) => {
        jobs.forEach((job) => {
            const article = document.createElement("article");
            article.className = "job-card";
            article.dataset.technology = job.data.technology;
            article.dataset.modalidad = job.data.modalidad;
            article.dataset.nivel = job.data.nivel;
            article.dataset.id = job.id;

            article.innerHTML = `<header class="job-header">
                        <h4 id="job-title">${job.titulo}</h4>
                        <ul class="search-params">
                            <li>${job.empresa}</li>
                            <li>${job.ubicacion}</li>
                            <li>${job.data.technology}</li>
                            <li>${job.data.nivel}</li>
                        </ul>
                        <p>
                            ${job.descripcion}
                        </p>
                    </header>
                    <a href="./oferta.html" class="button tertiary job">
                        Aplicar
                    </a>`;
            container.appendChild(article);
        });
    });
