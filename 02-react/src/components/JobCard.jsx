const JobCard = ({ job }) => {
    return (
        <article className="job-card" id={job.id}>
            <header className="job-header">
                <h4 id="job-title">{job.titulo}</h4>
                <ul className="search-params">
                    <li>{job.empresa}</li>
                    <li>{job.ubicacion}</li>
                    <li>{job.data.technology}</li>
                    <li>{job.data.nivel}</li>
                </ul>
                <p>{job.descripcion}</p>
            </header>
            <a href="./oferta.html" className="button tertiary job">
                Aplicar
            </a>
        </article>
    );
};

export default JobCard;
