import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const app = initializeApp(
    //put your firebase config here
);

export const db = getDatabase(app);



