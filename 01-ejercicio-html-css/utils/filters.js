import {
    setTecFilter,
    setLevFilter,
    setLocFilter,
    getFilterState,
} from "./state.js";
//Filtro de modalidad

const filterLocation = document.querySelector("#filter-location");
const filterTechnology = document.querySelector("#filter-technology");
const filterLevel = document.querySelector("#filter-level");

const mensaje = document.querySelector("#filter-selected-value");

function applyAllFilters() {
    const jobs = document.querySelectorAll(".job-card");

    setLocFilter(filterLocation.value);
    setTecFilter(filterTechnology.value);
    setLevFilter(filterLevel.value);

    const selectedFilters = getFilterState();

    mensaje.textContent = `Filtros - Tec:${selectedFilters.tec} - Loc:${selectedFilters.loc} - Lev: ${selectedFilters.lev}
    `;

    jobs.forEach((job) => {
        const modalidad = job.getAttribute("data-modalidad");
        const tecnologia = job.getAttribute("data-technology");
        const nivel = job.getAttribute("data-nivel");

        const locationMatch =
            selectedFilters.loc === "" || selectedFilters.loc === modalidad;
        const technologyMatch =
            selectedFilters.tec === "" || selectedFilters.tec === tecnologia;
        const levelMatch =
            selectedFilters.lev === "" || selectedFilters.lev === nivel;
        const isShown = locationMatch && technologyMatch && levelMatch;
        job.classList.toggle("hidden", !isShown);
        job.classList.toggle("visible", isShown);
    });
}

filterLocation.addEventListener("change", applyAllFilters);
filterTechnology.addEventListener("change", applyAllFilters);
filterLevel.addEventListener("change", applyAllFilters);
