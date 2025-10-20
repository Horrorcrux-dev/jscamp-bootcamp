//Pagination de la pagina empleos

const pagination = document.querySelector(".pagination-wrapper");
const articles = document.querySelectorAll(".job-card");
const totalArticles = articles.length;
const articlesPerPage = 3;
const totalPages = Math.ceil(totalArticles / articlesPerPage);

function pagination(currentPage, totalPages) {
    const paginationContainer = document.createElement("nav");
    paginationContainer.classList.add("pagination-wrapper");
}
