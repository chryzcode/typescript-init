"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./routes/app"));
//For env File
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(app_1.default);
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("A TS app");
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await mongoose.connect(process.env.MONGO_URI);
        app.listen(port, () => console.log(`server is running on port ${port}`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
