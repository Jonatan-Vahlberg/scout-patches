import { auth } from "@/firebase/firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse, } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const {
            email,
            password,
        } = body;
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        
        return NextResponse.json(response);
    } catch (error) {
        console.warn("Error Login: ",error);
        return error;
    }
}