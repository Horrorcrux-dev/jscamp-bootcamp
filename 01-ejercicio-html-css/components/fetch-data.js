import { setJobs } from "../utils/state.js";
import renderJobs from "./render-jobs.js";

//Fetch de datos.json para pagina Empleos
fetch("../lib/data.json") //fetch es asincrono
    .then((response) => {
        return response.json();
    })
    .then((jobs) => {
        setJobs(jobs);
        renderJobs();
    });
