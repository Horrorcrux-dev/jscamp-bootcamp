//Utilizando querySelectorAll - solo toma el primer elemento encontrado.
/*
const boton = document.querySelector(".button.tertiary.job");

if (boton !== null) {
    boton.addEventListener("click", () => {
        boton.textContent = "Aplicado!";
        boton.classList.add("is-applied");
        boton.disabled = true;
    });
}
*/

//Utilizando querySelectorAll - toma todos los elementos encontrados.
/*
const botones = document.querySelectorAll(".button.tertiary.job");
//devuelve un NodeList (array-like) con todos los botones que encuentra
// o una lista vacía [] si no encuentra ninguno

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        boton.textContent = "Aplicado!";
        boton.classList.add("is-applied");
        boton.disabled = true;
    });
});
*/

//Utilizando querySelector para escuchar el elemento padre
const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection?.addEventListener("click", function (event) {
    const element = event.target;

    if (element.classList.contains("job")) {
        element.textContent = "Aplicado!";
        element.classList.add("is-applied");
        element.disabled = true;
    }
});
