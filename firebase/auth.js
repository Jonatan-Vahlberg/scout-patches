import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const register = async (user) => {
    try {
        const { email, password } = user;
        const response = await createUserWithEmailAndPassword(auth, email, password);
        return response;
    } catch (error) {
        return error;
    }
};

export const firebaseLogin = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response;
    } catch (error) {
        return error;
    }
}

export const logout = async () => {
    try {
        const response = await signOut(auth);
        return response;
    } catch (error) {
        return error;
    }
}
