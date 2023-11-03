import { database } from "@/firebase/firebase"; 
import { snapshotToArrayWithIds } from "@/firebase/helpers";
import { ref, get as getDatabase, orderByChild, query } from "firebase/database";

export const getUserPatches = async (userid) => {
    try {
        const _query = query(
            ref(database, `users/${userid}/patches/`),  
            orderByChild("updated_at"));
        const response = await getDatabase(_query);
        const data = snapshotToArrayWithIds(response);
        return data;
    } catch (error) {
        console.warn("Error Patches: ", error);
        return error;
    }
}

