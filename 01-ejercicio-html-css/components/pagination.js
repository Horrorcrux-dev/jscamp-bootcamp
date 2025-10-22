import { icons } from "../lib/icons.js";
import { getNumberOfPages, state } from "../utils/state.js";

const pagination = document.querySelector(".pagination-wrapper");
let currentPageIds = [];

//crear flecha de atras
const leftArrow = document.createElement("a");
leftArrow.className = "prev";
leftArrow.innerHTML = `${icons.leftArrow}`;
//onclick event
leftArrow.addEventListener("click", () => {
    if (state.currentPage > 1) {
        state.currentPage--;
        viewCurrentPageJobs();
        console.log(state.currentPage);
    }
});
pagination.appendChild(leftArrow);

//crear numeros de pagina
for (let i = 1; i <= 5; i++) {
    const pageNumber = document.createElement("a");
    pageNumber.className = "page-number";
    pageNumber.innerHTML = `${i}`;
    pageNumber.addEventListener("click", () => {
        state.currentPage = i;
        viewCurrentPageJobs();
        console.log(state.currentPage);
    });
    pagination.appendChild(pageNumber);
}

//crear flecha de siguiente
const rightArrow = document.createElement("a");
rightArrow.className = "next";
rightArrow.innerHTML = `${icons.rightArrow}`;
rightArrow.addEventListener("click", () => {
    if (state.currentPage < getNumberOfPages()) {
        state.currentPage++;
        viewCurrentPageJobs();
        console.log(state.currentPage);
    }
});
pagination.appendChild(rightArrow);

//Filtrar jobs segun pagina actual

export function viewCurrentPageJobs() {
    currentPageIds = [];
    const jobIndex = (state.currentPage - 1) * state.jobsPerPage;
    const endIndex = jobIndex + state.jobsPerPage;
    for (let i = jobIndex; i < endIndex; i++) {
        currentPageIds.push(state.filteredJobs[i].id);
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
    console.log(currentPageIds);
}
