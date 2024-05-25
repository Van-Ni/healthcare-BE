import { corsOptions } from './config/cors';
import express, { Application } from 'express';
import exitHook from 'async-exit-hook';
import 'dotenv/config'
import { env } from './config/enviroment';
import { API_V1 } from './routers/v1';
import bodyParser from 'body-parser';
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware';
import cors from 'cors';


const START_SERVER = () => {
  //#express : typescript
  //https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
  //https://classic.yarnpkg.com/lang/en/docs/cli/init/
  const app: Application = express();

  app.use(cors(corsOptions))
  
  // #package: body-parser
  // process data sent from the client side (such as form data, JSON data)
  //parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())

  // Router API : V1
  app.use('/v1', API_V1)

  // Error Handling in Express
  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, () => {
    console.log(`Hello Ni handsome, Express is listening at http://localhost:${env.APP_PORT}`);
  });


  exitHook(() => {
    // #mongodb: Doing a cleanup action just before Node.js exits
    //https://stackoverflow.com/questions/14031763/doing-a-cleanup-action-just-before-node-js-exits
    // #package: async-exit-hook @types/async-exit-hook
    // Run some code when the process exits
    console.log("Server is shutting down");

  })
}

// # js : the Async IIFE
(async () => {
  // code goes here
  try {
    /** # START SERVER #
    * Only when the database connection is successful will the server start
    */
    
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