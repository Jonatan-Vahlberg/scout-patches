import { ref, get, orderByChild, query, set } from "firebase/database";

import { database } from "../firebase"; 
import { snapshotToArrayWithIds } from "../helpers";

export const getUserPatches = async (userid) => {
    try {
        const _query = query(
            ref(database, `users/${userid}/patches/`),  
            orderByChild("updated_at"));
        const response = await get(_query);
        const data = snapshotToArrayWithIds(response);
        return data;
    } catch (error) {
        console.warn("Error Patches: ", error);
        return []
    }
}

export const addUserPatch = async (userid, data) => {
    try {
        await set(ref(database, `users/${userid}/patches/${data.id}`), data);
        return {
            status: "success",
        }
    } catch (error) {
        console.warn("Error Patches: ", error);
        return {
            status: "error",
            error: error,
        }
    }
}

export const updateUserPatch = async (userid, patchid, data) => {
    try {
        await set(ref(database, `users/${userid}/patches/${patchid}`), data);
        return {
            status: "success",
        }
    } catch (error) {
        console.warn("Error Patches: ", error);
        return {
            status: "error",
            error: error,
        }
    }
}