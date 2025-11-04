//Busqueda por palabra clave
const searchInput = document.querySelector("#empleos-search-input");

function filterJobsByKeyword(keyword) {
    const jobs = document.querySelectorAll(".job-card");
    jobs.forEach((job) => {
        const title = job.querySelector("#job-title").textContent.toLowerCase();
        const isVisible = title.includes(keyword.toLowerCase());
        job.classList.toggle("hidden", !isVisible);
    });
}

searchInput.addEventListener("input", () => {
    const keyword = searchInput.value;
    filterJobsByKeyword(keyword);
});

searchInput.addEventListener("blur", () => {
    console.log("Se dispara cuando el campo pierde el foco");
});

const searchForm = document.querySelector("#empleos-search-form");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Formulario enviado con la palabra clave:", searchInput.value);
});
