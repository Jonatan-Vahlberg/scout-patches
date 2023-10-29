import { auth } from "@/firebase/firebase"; 
import { signOut } from "firebase/auth";

export async function POST(req) {
    try {
        const response = await signOut(auth)
        return response;
    } catch (error) {
        return error;
    }
}