//Filtro de modalidad

const filter = document.querySelector("#filter-location");
const mensaje = document.querySelector("#filter-selected-value");

filter.addEventListener("change", () => {
    const jobs = document.querySelectorAll(".job-card");
    const selectedValue = filter.value;
    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
    } else {
        mensaje.textContent = "";
    }

    jobs.forEach((job) => {
        //const modalidad = job.dataset.modalidad;
        const modalidad = job.getAttribute("data-modalidad");
        const isShown = selectedValue === "" || selectedValue === modalidad;
        job.classList.toggle("hidden", !isShown);
        job.classList.toggle("visible", isShown);
    });
});
