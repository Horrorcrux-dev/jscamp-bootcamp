import JobCard from "./JobCard";

const JobListings = ({ jobs }) => {
  return (
    <section className="jobs-listings">
      <h2>Resultados de búsqueda</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
};

export default JobListings;
