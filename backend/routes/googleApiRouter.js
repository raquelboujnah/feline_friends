import express from "express";
import {getAllPoints, addPoint, addFeeding} from "../controllers/googleApiController.js";


console.log("-")

export const routerGoogleApi = express.Router();

console.log("+")
routerGoogleApi.get('/map_points', getAllPoints);
routerGoogleApi.post('/add_point', addPoint);
routerGoogleApi.post('/feedings', addFeeding);

