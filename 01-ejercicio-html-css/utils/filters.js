//Filtro de modalidad

const filterLocation = document.querySelector("#filter-location");
const filterTechnology = document.querySelector("#filter-technology");
const filterLevel = document.querySelector("#filter-level");

const mensaje = document.querySelector("#filter-selected-value");

function applyAllFilters() {
    const jobs = document.querySelectorAll(".job-card");

    const selectedLocation = filterLocation.value;
    const selectedTechnology = filterTechnology.value;
    const selectedLevel = filterLevel.value;

    const activeFilters = [];
    if (selectedLocation) activeFilters.push(`Ubicación: ${selectedLocation}`);
    if (selectedTechnology)
        activeFilters.push(`Tecnología: ${selectedTechnology}`);
    if (selectedLevel) activeFilters.push(`Nivel: ${selectedLevel}`);

    mensaje.textContent =
        activeFilters.length > 0
            ? `Filtros activos - ${activeFilters.join(", ")}`
            : "";

    jobs.forEach((job) => {
        const modalidad = job.getAttribute("data-modalidad");
        const tecnologia = job.getAttribute("data-technology");
        const nivel = job.getAttribute("data-nivel");

        const locationMatch =
            selectedLocation === "" || selectedLocation === modalidad;
        const technologyMatch =
            selectedTechnology === "" || selectedTechnology === tecnologia;
        const levelMatch = selectedLevel === "" || selectedLevel === nivel;
        const isShown = locationMatch && technologyMatch && levelMatch;
        job.classList.toggle("hidden", !isShown);
        job.classList.toggle("visible", isShown);
    });
}

filterLocation.addEventListener("change", applyAllFilters);
filterTechnology.addEventListener("change", applyAllFilters);
filterLevel.addEventListener("change", applyAllFilters);
