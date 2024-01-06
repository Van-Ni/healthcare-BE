import express, { Application, Request, Response } from 'express';

//#express : typescript
//https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
//https://classic.yarnpkg.com/lang/en/docs/cli/init/
const app : Application = express();
const port : number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello NiNi!')
});

app.listen(port, () => {
  console.log(`Hello Ni handsome, Express is listening at http://localhost:${port}`);
});