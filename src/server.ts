import { CLOSE_DB, CONNECT_DB, GET_DB } from './config/mongodb';
import express, { Application, Request, Response } from 'express';
import exitHook from 'async-exit-hook';
import 'dotenv/config'
import { env } from 'config/enviroment';
import { API_V1 } from 'routers/v1';
import bodyParser from 'body-parser';

const START_SERVER = () => {
  //#express : typescript
  //https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
  //https://classic.yarnpkg.com/lang/en/docs/cli/init/
  const app: Application = express();

  // #package: body-parser
  // process data sent from the client side (such as form data, JSON data)
  //parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())

  // Router API : V1
  app.use('/v1', API_V1)


  app.get('/getDB', async (req: Request, res: Response) => {
    res.send(await GET_DB().listCollections().toArray())
  });

  app.listen(env.APP_PORT, () => {
    console.log(`Hello Ni handsome, Express is listening at http://localhost:${env.APP_PORT}`);
  });


  exitHook(() => {
    // #mongodb: Doing a cleanup action just before Node.js exits
    //https://stackoverflow.com/questions/14031763/doing-a-cleanup-action-just-before-node-js-exits
    // #package: async-exit-hook @types/async-exit-hook
    // Run some code when the process exits
    console.log("Server is shutting down");
    CLOSE_DB();
    console.log("Disconnected from MongoDB Atlas");

  })
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
    // Exit a Process
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