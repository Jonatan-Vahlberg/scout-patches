"use client";
import { Checkbox } from "@nextui-org/react";   

import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";



const PatchRequirement = ({ patch, requirement, index = -1 }) => {
    const user = useUser();

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if(user.userPatches.length > 0) {
            const userPatch = user.userPatches.find((userPatch) => userPatch.id === patch.id);
            console.log("userPatch: ", userPatch)
            if(userPatch?.requirements_passed) {
                console.log("index: ", index)
                const _checked = userPatch.requirements_passed.includes(index);
                console.log("_checked: ", _checked)
                setChecked(_checked);
            }
        }
    },[user.userPatches])


    return (
        <li className="flex items-center gap-2 mb-2">

            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="w-full"
            />
                {requirement}
        </li>
    )

}

export default PatchRequirement;