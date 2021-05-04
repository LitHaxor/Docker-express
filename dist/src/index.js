"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("../configs/config");
const app = express_1.default();
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success'
    });
}).listen(config_1.NODE_PORT, () => {
    console.log(`server listening on http://localhost:${config_1.NODE_PORT}`);
});
//# sourceMappingURL=index.js.map