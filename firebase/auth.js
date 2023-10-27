import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Auth } from "./firebase";

export const register = async (user) => {
    try {
        const { email, password } = user;
        const response = await createUserWithEmailAndPassword(Auth, email, password);
        return response;
    } catch (error) {
        return error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(Auth, email, password);
        return response;
    } catch (error) {
        return error;
    }
}

export const logout = async () => {
    try {
        const response = await signOut(Auth);
        return response;
    } catch (error) {
        return error;
    }
}
