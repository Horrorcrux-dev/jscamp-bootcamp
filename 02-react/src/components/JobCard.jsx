import { useState } from "react";
import Modal from "./modal";

const JobCard = ({ job }) => {
  const [isApplied, setIsApplied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleApplyClick = () => {
    event.preventDefault();
    setIsApplied(true);
  };

  const buttonClasses = isApplied ? "button tertiary job is-applied" : "button tertiary job";
  const buttonText = isApplied ? "Aplicado" : "Aplicar";

  return (
    <article
      className="job-card"
      id={job.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <header className="job-header">
        <h4 id="job-title">{job.titulo}</h4>

        {isHovered && <Modal job={job} />}

        <p>{job.descripcion}</p>
      </header>
      <a href="#" className={buttonClasses} onClick={handleApplyClick}>
        {buttonText}
      </a>
    </article>
  );
};

export default JobCard;
