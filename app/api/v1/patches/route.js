import { database } from "@/firebase/firebase"; 
import { snapshotToArrayWithIds } from "@/firebase/helpers";
import { ref, get as getDatabase, orderByChild, limitToFirst, query, startAt } from "firebase/database";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const _query = query(
            ref(database, "patches"),  
            orderByChild("title"));
        const response = await getDatabase(_query);
        const data = snapshotToArrayWithIds(response);
        if(response.exists()) {
            return NextResponse.json({
                status: 200,
                data: data,
            });
        }
        return NextResponse.json({
            status: 404,
            data: "No patches found",
        });
       
    } catch (error) {
        console.warn("Error Patches: ", error);
        return error;
    }
}

