import express, { Router } from "express";
import {test, testApi} from "../controllers/app";


const router: Router = express.Router();

router.route("/test").get(test).post(testApi);


export default router;
