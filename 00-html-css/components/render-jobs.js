import { getFilteredJobs, setNumberOfPages } from "../utils/state.js";
import { viewCurrentPageJobs, renderPaginationButtons } from "./pagination.js";

export default function renderJobs() {
    const jobs = getFilteredJobs();
    const container = document.querySelector(".jobs-listings");
    container.innerHTML = "";
    const h3 = document.createElement("h3");
    h3.className = "search-result-title";
    h3.innerText = "Resultados de búsqueda";

    jobs.forEach((job) => {
        const article = document.createElement("article");
        article.className = "job-card";
        article.id = job.id;
        article.dataset.technology = job.data.technology;
        article.dataset.modalidad = job.data.modalidad;
        article.dataset.nivel = job.data.nivel;

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

    setNumberOfPages();
    viewCurrentPageJobs();
    renderPaginationButtons();
}
