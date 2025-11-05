import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchFormSection from "./components/SearchFormSection";
import JobListings from "./components/JobListings";
import Pagination from "./components/Pagination";

import jobsData from "./data.json";

function App() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);

  const jobsFilteredByFilters = jobsData.filter((job) => {
    const technologyMatch = filters.technology === "" || job.data.technology === filters.technology;
    const locationMatch = filters.location === "" || job.data.modalidad === filters.location;
    const experienceLevelMatch = filters.experienceLevel === "" || job.data.nivel === filters.experienceLevel;
    return technologyMatch && locationMatch && experienceLevelMatch;
  });

  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
        });

  const totalPages = Math.ceil(jobsWithTextFilter.length / jobsPerPage);
  const PagedResults = jobsWithTextFilter.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleChange = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  const handleJobsPerPageChange = (jobsPerPage) => {
    setJobsPerPage(jobsPerPage);
    setCurrentPage(1);
  };

  return (
    <>
      <Header></Header>
      <main>
        <SearchFormSection onChange={handleChange} onTextFilter={handleTextFilter} />
        <JobListings jobs={PagedResults} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onJobsPerPageChange={handleJobsPerPageChange}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
