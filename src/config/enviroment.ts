import 'dotenv/config'

// #pattern: organize environment variables for common use 
//           Avoid import multiple times
export const env = {
    APP_HOST: process.env.APP_HOST,
    APP_PORT: process.env.APP_PORT,

    MONGODB_URL: process.env.MONGODB_URL,
    DATABASE_NAME: process.env.DATABASE_NAME,
    AUTHOR: process.env.AUTHOR,
}