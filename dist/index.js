"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// create the express app
const app = (0, express_1.default)();
const port = 3000;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.get('/awesome/applicant', (req, res) => {
    const information = {
        name: 'Sarah Yakum',
        about: 'I enjoy reading and watching movies'
    };
    res.json(information);
});
app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});
