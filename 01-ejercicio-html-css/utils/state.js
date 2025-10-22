export const state = {
    jobs: [],
    filteredJobs: [],
    currentPage: 1,
    jobsPerPage: 3,
    tecfilter: "",
    locfilter: "",
    levfilter: "",
};

export const setJobs = (jobs) => {
    state.jobs = jobs;
    state.filteredJobs = jobs;
};

export const getNumberOfPages = () => {
    return Math.ceil(state.filteredJobs.length / state.jobsPerPage);
};

export const setTecFilter = (tec) => {
    state.tecfilter = tec;
};
export const setLocFilter = (loc) => {
    state.locfilter = loc;
};
export const setLevFilter = (lev) => {
    state.levfilter = lev;
};

export const getFilterState = () => {
    return {
        tec: state.tecfilter,
        loc: state.locfilter,
        lev: state.levfilter,
    };
};
