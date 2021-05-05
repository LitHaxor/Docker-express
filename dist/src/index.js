"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configs_1 = require("../configs");
const postRouter_1 = __importDefault(require("./routers/postRouter"));
const app = express_1.default();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'passed',
        database: configs_1.connectionString || 'n/a',
    });
});
app.use('/posts', postRouter_1.default);
app.listen(configs_1.NODE_PORT, () => {
    console.log(`server listening on http://localhost:${configs_1.NODE_PORT}`);
});
//# sourceMappingURL=index.js.map