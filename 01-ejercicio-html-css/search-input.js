//Busqueda por palabra clave
const searchInput = document.querySelector("#empleos-search-input");

searchInput.addEventListener("input", () => {
    console.log(searchInput.value);
});

searchInput.addEventListener("blur", () => {
    console.log("Se dispara cuando el campo pierde el foco");
});

const searchForm = document.querySelector("#empleos-search-form");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Formulario enviado con la palabra clave:", searchInput.value);
});
