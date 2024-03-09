"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("../controllers/app");
const router = express_1.default.Router();
router.route("/test").get(app_1.test).post(app_1.testApi);
exports.default = router;
