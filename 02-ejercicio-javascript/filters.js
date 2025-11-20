/* Aquí va la lógica para filtrar los resultados de búsqueda */
const techFilter = document.querySelector("#filter-technology");
const locationFilter = document.querySelector("#filter-location");
const experienceFilter = document.querySelector("#filter-experience-level");
const searchFilter = document.querySelector("#empleos-search-input");

const selectedFilters = {
    tec: techFilter.value || "",
    loc: locationFilter.value || "",
    exp: experienceFilter.value || "",
    search: searchFilter.value || "",
};

const applyFilters = () => {
    const jobs = document.querySelectorAll(".job-listing-card");
    selectedFilters.loc = locationFilter.value;
    selectedFilters.tec = techFilter.value;
    selectedFilters.exp = experienceFilter.value;
    selectedFilters.search = searchFilter.value;

    console.log(selectedFilters);
    jobs.forEach((job) => {
        const modalidad = job.dataset.modalidad;
        const tecnologia = job.dataset.technology;
        const nivel = job.dataset.nivel;
        const title = job.dataset.title;

        const techArray = tecnologia ? tecnologia.split(",") : [];

        const locationMatch =
            selectedFilters.loc === "" || selectedFilters.loc === modalidad;
        const technologyMatch =
            selectedFilters.tec === "" ||
            techArray.includes(selectedFilters.tec);
        const levelMatch =
            selectedFilters.exp === "" || selectedFilters.exp === nivel;
        const searchMatch =
            selectedFilters.search === "" ||
            title.toLowerCase().includes(selectedFilters.search);
        const isShown =
            locationMatch && technologyMatch && levelMatch && searchMatch;
        console.log(title, selectedFilters.search, searchMatch);
        job.classList.toggle("is-hidden", !isShown);
    });
};

locationFilter.addEventListener("change", applyFilters);
techFilter.addEventListener("change", applyFilters);
experienceFilter.addEventListener("change", applyFilters);
searchFilter.addEventListener("input", applyFilters);
