import express, { Router } from "express";
import {test} from "../controllers/app";


const router: Router = express.Router();

router.route("/test").get(test);


export default router;
