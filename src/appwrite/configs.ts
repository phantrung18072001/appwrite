import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65d0c164563016666164"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
