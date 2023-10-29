import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; 

export async function POST(req) {
    try {
        const {
            email,
            password,
            name,
        } = req.body;
        
        const response = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(response.user, {
            displayName: name,
        });
        return response;
    } catch (error) {
        return error;
    }
}