/* Aquí va la lógica para dar funcionalidad al botón de "Aplicar" */
const jobsListingsSection = document.querySelector(".jobs-listings");

jobsListingsSection.addEventListener("click", (event) => {
    const button = event.target;

    if (button.classList.contains("button-apply-job")) {
        button.textContent = "¡Aplicado!";
        button.classList.add("is-applied");
        button.disabled = true;
    }
});
