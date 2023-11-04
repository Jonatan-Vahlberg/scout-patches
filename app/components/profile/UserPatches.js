"use client";

import { usePatches } from "@/context/PatchContext";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import PatchListItem from "../Patch/PatchListItem";

const UserPatches = () => {
    const user = useUser()
    const patches = usePatches();

    const [shownPatches, setShownPatches] = useState([]);

    useEffect(() => {
        if(user.userPatches.length > 0 && patches.patches.length > 0) {
            const _shownPatches = user.userPatches.map((userPatch) => {
                let patch = patches.patches.find((patch) => patch.id === userPatch.id);
                
                return patch;
            }).filter((patch) => patch !== undefined);
            setShownPatches(_shownPatches);
        }
    }
    ,[user.userPatches, patches.patches])
    
    return( 
        <div className="flex flex-col flex-1 overflow-hidden">
            <h2 className="text-2xl font-semibold my-4">Dina Märken</h2>
            <div className="overflow-y-auto flex flex-col flex-1 gap-4 p-4">
                {shownPatches.map((patch) => (
                    <PatchListItem 
                        key={patch.id}
                        patch={patch}
                    />
                ))}
            </div>
        </div>
    )
}

export default UserPatches;