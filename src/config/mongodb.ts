import { Db, MongoClient, ServerApiVersion } from "mongodb";
import { env } from "./enviroment";

let trelloDatabaseInstance: Db | null = null;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoClientInstance = new MongoClient(env.MONGODB_URL as string, {
    //#mongodb: Stable API
    //https://www.mongodb.com/docs/drivers/node/current/fundamentals/stable-api/
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
)

//https://www.mongodb.com/docs/drivers/node/v3.6/fundamentals/connection/connect/
export const CONNECT_DB = async () => {
    // Connect the mongoClientInstance to the server (Mongo Atlas)
    await mongoClientInstance.connect();
    
    // Send a ping to confirm a successful connection
    trelloDatabaseInstance = mongoClientInstance.db(process.env.DATABASE_NAME)
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

export const CLOSE_DB = async () => {
    console.log("mongoClientInstance close");
    await mongoClientInstance.close();
}

// #pattern: reuse instances
export const GET_DB = () => {
    if (!trelloDatabaseInstance) throw new Error("Must connect to Database first!");
    return trelloDatabaseInstance;
}