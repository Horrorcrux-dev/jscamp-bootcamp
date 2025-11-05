import { svgs } from "../assets/svgs";
import styles from "./Pagination.module.css";
import { useId } from "react";

const Pagination = ({ currentPage = 1, totalPages = 5, onPageChange, onJobsPerPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const stylePrevButton = isFirstPage ? { pointerEvents: "none", opacity: 0.5 } : {};
  const styleNextButton = isLastPage ? { pointerEvents: "none", opacity: 0.5 } : {};

  const idJobsPerPage = useId();

  const handlePrevClick = (event) => {
    event.preventDefault();
    if (isFirstPage === false) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    if (isLastPage === false) {
      onPageChange(currentPage + 1);
    }
  };

  const handleChangePage = (event, page) => {
    event.preventDefault();
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleChangeJobsPerPage = (event) => {
    const jobsPerPage = event.target.value;
    onJobsPerPageChange(jobsPerPage);
  };

  return (
    <section className={styles.pagination}>
      <div className="filters-wrapper pages">
        <select
          name="jobsPerPage"
          id={idJobsPerPage}
          className={styles.jobsPerPageSelector}
          defaultValue={"5"}
          onChange={handleChangeJobsPerPage}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <nav className={styles.paginationWrapper}>
        <a href="#" style={stylePrevButton} onClick={handlePrevClick}>
          {svgs.leftArrow}
        </a>

        {pages.map((page) => (
          <a
            href="#"
            key={page}
            className={currentPage === page ? styles.activated : ""}
            onClick={(event) => handleChangePage(event, page)}>
            {page}
          </a>
        ))}
        <a href="#" style={styleNextButton} onClick={handleNextClick}>
          {svgs.rightArrow}
        </a>
      </nav>
    </section>
  );
};

export default Pagination;
