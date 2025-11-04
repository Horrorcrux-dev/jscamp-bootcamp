import { icons } from "../lib/icons.js";
import {
    getNumberOfPages,
    setJobsPerPage,
    getCurrentPage,
    setCurrentPage,
    getJobsPerPage,
    getFilteredJobs,
} from "../utils/state.js";
import renderJobs from "./render-jobs.js";

const pagination = document.querySelector(".pagination-wrapper");
let currentPageIds = [];

// Función para renderizar los botones de paginación
export function renderPaginationButtons() {
    if (!pagination) return;

    // Limpiar contenido actual
    pagination.innerHTML = "";

    // Crear flecha de atrás
    const leftArrow = document.createElement("a");
    leftArrow.className = "prev";
    leftArrow.innerHTML = `${icons.leftArrow}`;
    leftArrow.addEventListener("click", () => {
        if (getCurrentPage() > 1) {
            setCurrentPage(getCurrentPage() - 1);
            viewCurrentPageJobs();
            renderPaginationButtons(); // Re-renderizar para actualizar estado activo
        }
    });
    pagination.appendChild(leftArrow);

    // Crear números de página dinámicamente
    const totalPages = getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement("a");
        pageNumber.className = "page-number";
        if (i === getCurrentPage()) {
            pageNumber.classList.add("active");
        }
        pageNumber.innerHTML = `${i}`;
        pageNumber.addEventListener("click", () => {
            setCurrentPage(i);
            viewCurrentPageJobs();
            renderPaginationButtons(); // Re-renderizar para actualizar estado activo
        });
        pagination.appendChild(pageNumber);
    }

    // Crear flecha de siguiente
    const rightArrow = document.createElement("a");
    rightArrow.className = "next";
    rightArrow.innerHTML = `${icons.rightArrow}`;
    rightArrow.addEventListener("click", () => {
        if (getCurrentPage() < getNumberOfPages()) {
            setCurrentPage(getCurrentPage() + 1);
            viewCurrentPageJobs();
            renderPaginationButtons(); // Re-renderizar para actualizar estado activo
        }
    });
    pagination.appendChild(rightArrow);
}

// Inicializar paginación al cargar
if (pagination) {
    renderPaginationButtons();
}

// Definir el numero de empleos a mostrar por pagina
const pagesFilter = document.querySelector("#jobs-per-page");
function applyNumberOfJobsPerPage() {
    setJobsPerPage(pagesFilter.value);
    setCurrentPage(1);
    renderJobs();
}
pagesFilter.addEventListener("change", applyNumberOfJobsPerPage);

//Filtrar jobs segun pagina actual

export function viewCurrentPageJobs() {
    currentPageIds = [];
    const jobIndex = (getCurrentPage() - 1) * getJobsPerPage();
    const endIndex = jobIndex + getJobsPerPage();
    for (let i = jobIndex; i < endIndex; i++) {
        const filteredJobs = getFilteredJobs();
        currentPageIds.push(filteredJobs[i]?.id);
    }

    const jobs = document.querySelectorAll(".job-card");
    jobs.forEach((job) => {
        if (currentPageIds.includes(job.id)) {
            job.classList.add("visible");
            job.classList.remove("hidden");
        } else {
            job.classList.add("hidden");
            job.classList.remove("visible");
        }
    });
}
