import { db } from "./firebase";
import { set, ref, get } from "firebase/database";

export const firebaseSet = async (value, path) => {
    set(ref(db, path), {
        value
    });
};

//get elements from users/
export const firebaseGet = async (path) => {
    get(ref(db, path)).then(snapshot => {
        alert(snapshot.val().value);
    }).catch(error => {
        console.log(error);
    });
}

export const firebaseDelete = async (path) => {
    set(ref(db, path), null);
}
