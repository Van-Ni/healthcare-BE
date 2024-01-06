"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//#express : typescript
//https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
//https://classic.yarnpkg.com/lang/en/docs/cli/init/
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello NiNi!');
});
app.listen(port, () => {
    console.log(`Hello Ni handsome, Express is listening at http://localhost:${port}`);
});
