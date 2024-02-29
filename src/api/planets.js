import axios from "axios";
import { PLANET_URL } from "../constants";

export const fetchPlanets = (page) => axios(PLANET_URL.replace(":page", page), {method: "GET"}).then((response) => response)