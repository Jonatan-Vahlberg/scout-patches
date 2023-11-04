import { ref, get as getDatabase, orderByChild, query } from "firebase/database";

import { database } from "../firebase"; 
import { snapshotToArrayWithIds } from "../helpers";

export const getAgeGroups = async () => {
    try {
        const _query = query(
            ref(database, "age_groups"),  
            orderByChild("index"));
        const response = await getDatabase(_query);
        if(response.exists()) {
            const data = snapshotToArrayWithIds(response);
            return data;
        }
        return [];
       
    } catch (error) {
        console.warn("Error Age groups: ", error);
        return []
    }
}

export const getPatches = async () => {
    try {
        const _query = query(
            ref(database, "patches"),  
            orderByChild("title"));
        const response = await getDatabase(_query);
        if(response.exists()) {
            const data = snapshotToArrayWithIds(response);
            return data;
        }
        return [];
       
    } catch (error) {
        console.warn("Error Patches: ", error);
        return []
    }
}

