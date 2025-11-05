import { svgs } from "../assets/svgs";
import { useId } from "react";

const SearchFormSection = ({ onChange, onTextFilter }) => {
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperienceLevel = useId();

  const handleChange = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const filters = {
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel),
    };

    onChange(filters);
  };

  const handleTextChange = (event) => {
    const text = event.target.value;
    onTextFilter(text);
  };

  return (
    <section className="section-wrapper">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>
      <form onChange={handleChange} id="empleos-search-form" role="search" className="search-form-secondary">
        <div className="search-bar">
          {svgs.searchIcon}
          <input
            name={idText}
            id="empleos-search-input"
            type="text"
            placeholder="Buscar trabajos, empresas o habilidades"
            onChange={handleTextChange}
          />
        </div>
        <div className="filters-wrapper">
          <select id="filter-technology" name={idTechnology} defaultValue={""}>
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

          <select id="filter-location" name={idLocation} defaultValue={""}>
            <option value="" hidden>
              Ubicación
            </option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="hibrido">Hibrido</option>
          </select>

          <select id="filter-level" name={idExperienceLevel} defaultValue={""}>
            <option value="" hidden>
              Nivel de experiencia
            </option>
            <option value="junior">Junior</option>
            <option value="mid-level">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
      </form>

      <a id="filter-selected-value" className="filterSelected" href=""></a>
    </section>
  );
};

export default SearchFormSection;
