import { CONNECT_DB, GET_DB } from './config/mongodb';
import express, { Application, Request, Response } from 'express';
import { DEFAULT } from 'hello/abc';


const START_SERVER = () => {
  //#express : typescript
  //https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
  //https://classic.yarnpkg.com/lang/en/docs/cli/init/
  const app: Application = express();
  const port: number = 4100;

  app.get('/', (req: Request, res: Response) => {
    console.log(DEFAULT);
    res.send('Hello Ni!')
  });

  app.get('/getDB', async (req: Request, res: Response) => {
    res.send(await GET_DB().listCollections().toArray())
  });

  app.listen(port, () => {
    console.log(`Hello Ni handsome, Express is listening at http://localhost:${port}`);
  });
}

// # js : the Async IIFE
(async () => {
  // code goes here
  try {
    /** # START SERVER #
    * Only when the database connection is successful will the server start
    */
    await CONNECT_DB()
    console.log('Connected to MongoDB Cloud Atlas')
    START_SERVER();
  } catch (error) {
    console.error(error)
    process.exit(0);
  }


})();

// CONNECT_DB()
//   .then(() => console.log('Connected to MongoDB Cloud Atlas'))
//   .then(() => START_SERVER())
//   .catch((err) => {
// console.error(error)
// process.exit(0);
//   });