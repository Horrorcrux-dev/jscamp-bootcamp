import { useState } from "react";
import data from "./data.json";
import Header from "./components/Header";
import JobCard from "./components/JobCard";

function App() {
    const [count, setCount] = useState(0);
    const cardInfo = data;

    return (
        <>
            <Header></Header>
            <main>
                <section className="section-wrapper">
                    <h1>Encuentra tu próximo trabajo</h1>
                    <p>
                        Explora miles de oportunidades en el sector tecnológico.
                    </p>
                    <form
                        id="empleos-search-form"
                        role="search"
                        className="search-form-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                        <input
                            id="empleos-search-input"
                            type="text"
                            placeholder="Buscar empleos por titulo, habilidad o empresa"
                        />
                    </form>
                    <div className="filters-wrapper">
                        <select
                            id="filter-technology"
                            name="Tecnología"
                            defaultValue={""}>
                            <option value="">Tecnología</option>
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                            <option value="java">Java</option>
                            <option value="csharp">C#</option>
                            <option value="ruby">Ruby</option>
                            <option value="php">PHP</option>
                            <option value="go">Go</option>
                            <option value="typescript">TypeScript</option>
                            <option value="sql">SQL</option>
                            <option value="mongodb">MongoDB</option>
                            <option value="r.">R.</option>
                            <option value="node.js">Node.js</option>
                            <option value="react">React</option>
                            <option value="swift">Swift</option>
                            <option value="kotlin">Kotlin</option>
                            <option value="ui/ux">UI/UX</option>
                            <option value="aws">AWS</option>
                            <option value="Azure">Azure</option>
                            <option value="gcp">GPC</option>
                        </select>

                        <select
                            id="filter-location"
                            name="Ubicación"
                            defaultValue={""}>
                            <option value="" hidden>
                                Ubicación
                            </option>
                            <option value="remoto">Remoto</option>
                            <option value="cdmx">Ciudad de México</option>
                            <option value="guadalajara">Guadalajara</option>
                            <option value="hibrido">Hibrido</option>
                        </select>

                        <select
                            id="filter-level"
                            name="Nivel de experiencia"
                            defaultValue={""}>
                            <option value="" hidden>
                                Nivel de experiencia
                            </option>
                            <option value="junior">Junior</option>
                            <option value="mid-level">Mid-level</option>
                            <option value="senior">Senior</option>
                            <option value="lead">Lead</option>
                        </select>
                    </div>
                    <a
                        id="filter-selected-value"
                        className="filterSelected"
                        href=""></a>
                </section>
                <section className="jobs-listings">
                    {cardInfo.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </section>
                <section className="pagination-section">
                    <div className="filters-wrapper pages">
                        <select
                            name="jobsPerPage"
                            id="jobs-per-page"
                            className="jobsPerPageSelector"
                            defaultValue={"3"}>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <nav className="pagination-wrapper"></nav>
                </section>
            </main>
            <footer>
                <small>
                    &copy; 2024 DevJobs. Todos los derechos reservados.
                </small>
            </footer>
        </>
    );
}

export default App;
