const state = {
    jobs: [],
    filteredJobs: [],
    currentPage: 1,
    jobsPerPage: 3,
    tecfilter: "",
    locfilter: "",
    levfilter: "",
    numberOfPages: 0,
};

//Guardar listado de trabajos
export const setJobs = (jobs) => {
    state.jobs = jobs;
    state.filteredJobs = jobs;
};

//Guardar listado de trabajos filtrados
export const setFilteredJobs = (jobs) => {
    state.filteredJobs = jobs;
};

//Obtener listado de trabajos
export const getJobs = () => {
    return state.jobs;
};

//Obtener listado de trabajos filtrados
export const getFilteredJobs = () => {
    return state.filteredJobs;
};

//Guardar la pagina actual
export const setCurrentPage = (num) => {
    state.currentPage = num;
};

//Obtener pagina actual
export const getCurrentPage = () => {
    return state.currentPage;
};

//Guardar el numero de trabajos por pagina
export const setJobsPerPage = (num) => {
    state.jobsPerPage = num;
    console.log(state.jobsPerPage);
};

//Obtener el numero de trabajos por pagina
export const getJobsPerPage = () => {
    return state.jobsPerPage;
};

//Guardar seleccion de filtros
export const setTecFilter = (tec) => {
    state.tecfilter = tec;
};
export const setLocFilter = (loc) => {
    state.locfilter = loc;
};
export const setLevFilter = (lev) => {
    state.levfilter = lev;
};

//Obtener estado de los filtros
export const getFilterState = () => {
    return {
        tec: state.tecfilter,
        loc: state.locfilter,
        lev: state.levfilter,
    };
};

//Guardar el numero de paginas con respecto a numero de trabajos
export const setNumberOfPages = () => {
    state.numberOfPages = Math.ceil(
        state.filteredJobs.length / state.jobsPerPage
    );
};

//Obtener el numero de paginas
export const getNumberOfPages = () => {
    return state.numberOfPages;
};
