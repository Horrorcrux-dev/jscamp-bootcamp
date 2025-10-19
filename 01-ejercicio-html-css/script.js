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

//Funcion para aplicar los filtros simultaneamente
const applyFilters = () => {
    const tecFilter = document.querySelector("#tecnologia");
    const ubiFilter = document.querySelector("#ubicacion");
    const contFilter = document.querySelector("#contrato");
    const xpFilter = document.querySelector("#experiencia");

    const selectedTec = tecFilter?.value.toLowerCase() || "";
    const selectedUbi = ubiFilter?.value.toLowerCase() || "";
    const selectedCont = contFilter?.value.toLowerCase() || "";
    const selectedXp = xpFilter?.value.toLowerCase() || "";

    const jobCards = document.querySelectorAll(".job-card");

    jobCards.forEach((article) => {
        const tecElement = article.querySelector(".search-params .tecnologia");
        const ubiElement = article.querySelector(".search-params .ubicacion");
        const contElement = article.querySelector(".search-params .contrato");
        const xpElement = article.querySelector(".search-params .experiencia");

        const tecText = tecElement?.textContent.toLowerCase() || "";
        const ubiText = ubiElement?.textContent.toLowerCase() || "";
        const contText = contElement?.textContent.toLowerCase() || "";
        const xpText = xpElement?.textContent.toLowerCase() || "";

        const passTecFilter =
            selectedTec === "" || tecText.includes(selectedTec);
        const passUbiFilter =
            selectedUbi === "" || ubiText.includes(selectedUbi);
        const passContFilter =
            selectedCont === "" || contText.includes(selectedCont);
        const passXpFilter = selectedXp === "" || xpText.includes(selectedXp);

        if (passTecFilter && passUbiFilter && passContFilter && passXpFilter) {
            article.classList.remove("hidden");
        } else {
            article.classList.add("hidden");
        }
    });

    jobCards.forEach((article) => {
        article.classList.remove("first-visible", "last-visible");
    });

    const visibleCards = Array.from(jobCards).filter(
        (card) => !card.classList.contains("hidden")
    );

    if (visibleCards.length > 0) {
        visibleCards[0].classList.add("first-visible");
        visibleCards[visibleCards.length - 1].classList.add("last-visible");
    }
};

const tecFilter = document.querySelector("#tecnologia");
const ubiFilter = document.querySelector("#ubicacion");
const contFilter = document.querySelector("#contrato");
const xpFilter = document.querySelector("#experiencia");

tecFilter?.addEventListener("change", applyFilters);
ubiFilter?.addEventListener("change", applyFilters);
contFilter?.addEventListener("change", applyFilters);
xpFilter?.addEventListener("change", applyFilters);

applyFilters();

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
