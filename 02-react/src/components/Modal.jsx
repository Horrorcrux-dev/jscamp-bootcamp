const Modal = ({ job }) => {
  return (
    <ul className="search-params">
      <li>{job.empresa}</li>
      <li>{job.ubicacion}</li>
      <li>{job.data.technology}</li>
      <li>{job.data.nivel}</li>
    </ul>
  );
};

export default Modal;
