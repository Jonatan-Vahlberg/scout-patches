import { get, push, update } from "firebase/database";
import { Database } from "./firebase";

//* USER *//

const USER_REF = "users";

export const getUser = async (uid) => {
    try {
        const response = await get(Database, `${USER_REF}/${uid}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const updateUser = async (uid, user) => {
    try {
        const response = await update(Database, `${USER_REF}/${uid}`, user);
        return response;
    } catch (error) {
        return error;
    }
}

//* USER-patches *//
export const getUserPatches = async (uid) => {
    try {
        const response = await get(Database, `${USER_REF}/${uid}/patches`);
        return response;
    } catch (error) {
        return error;
    }
};

export const addUserPatch = async (uid, patch) => {
    try {
        const response = await push(Database, `${USER_REF}/${uid}/patches`, patch);
        return response;
    } catch (error) {
        return error;
    }
}

export const updateUserPatch = async (uid, patchId, patch) => {
    try {
        const response = await update(Database, `${USER_REF}/${uid}/patches/${patchId}`, patch);
        return response;
    } catch (error) {
        return error;
    }
}

//* PATCHES *//

const PATCHES_REF = "patches";

export const getPatches = async () => {
    try {
        const response = await get(Database, PATCHES_REF);
        return response;
    } catch (error) {
        return error;
    }
}

export const getPatch = async (patchId) => {
    try {
        const response = await get(Database, `${PATCHES_REF}/${patchId}`);
        return response;
    } catch (error) {
        return error;
    }
}

//* AGE GROUPS *//

const AGE_GROUPS_REF = "age_groups";

export const getAgeGroups = async () => {
    try {
        const response = await get(Database, AGE_GROUPS_REF);
        return response;
    } catch (error) {
        return error;
    }
}