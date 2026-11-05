import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { jwt } from "better-auth/plugins";

const mongodbUri =
    process.env.MONGODB_URI ??
    process.env.MONGODB_URL ??
    process.env.MONGODB_URl;

if (!mongodbUri) {
    throw new Error("Missing MONGODB_URI environment variable.");
}

const client = new MongoClient(mongodbUri);
const db = client.db("ImpactConnect");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },



    database: mongodbAdapter(db, {
        client,
    }),

    plugins: [jwt()],
    session: {
        cookieCache:{
            enabled: true,
            strategy: 'jwt',
            maxAge: 7 * 24 * 60 * 60
        }
    },


    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
});