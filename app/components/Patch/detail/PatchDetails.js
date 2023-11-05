"use client";

import { usePatches } from "@/context/PatchContext";
import { Card, Divider, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import PatchListAgeIcon from "../PatchListAgeIcon";
import PatchRequirement from "./PatchRequirement";
import { useUser } from "@/context/UserContext";
import Loadingbar from "../../globals/Loadingbar";

const PatchDetails = () => {
    const { id } = useParams();
    const searchParams = useSearchParams()
    const title = searchParams.get("title");

    const patches = usePatches();
    const user = useUser();

    const [patch, setPatch] = useState(null);
    const [userPatch, setUserPatch] = useState(null);
    const [requirements, setRequirements] = useState([]);

    const responsiveToChange = useRef(false);
    
    useEffect(() => {
        return () => {
            console.log("unmounting");
            console.log(userPatch);
            console.log(requirements);
        }
    },[])

    useEffect(() => {
        if(patches.patches.length > 0) {
            const _patch = patches.patches.find((patch) => patch.id === id);
            if(_patch) {

                setPatch(_patch);
            }
            responsiveToChange.current = true;
        }
    },[patches.patches, id])

    useEffect(() => {
        if(patches.patches.length > 0 && patch) {
            const _userPatch = user.userPatches.find((userPatch) => userPatch.id === patch.id);
            console.log(_userPatch);
            if(_userPatch) {
                setUserPatch(_userPatch);
                setRequirements(_userPatch.requirements_passed);
            }
        }
    },[patches.userPatches, patch])

    useEffect(() => {
        const responsiveAndUserPatch = responsiveToChange.current && userPatch && requirements.length !== userPatch.requirements_passed.length;
        const responsiveAndRequirements = responsiveToChange.current && !userPatch && requirements.length > 0;
        if(responsiveAndUserPatch || responsiveAndRequirements) {
            console.log("onRequirementChange");
            onRequirementChange();
        }
    },[requirements, responsiveToChange.current, userPatch])

    const onRequirementChange = () => {
        responsiveToChange.current = false;
        const onResponsiveAgain = () => {
            responsiveToChange.current = true;
        }
        if(userPatch) {

            user.updateUserPatch({
                ...userPatch,
                requirements_passed: requirements
            }, onResponsiveAgain)
        } else {
            user.addUserPatch({
                id: patch.id,
                requirements_passed: requirements
            }, onResponsiveAgain)
        }
    }

    return (
        <Card shadow="md" className="m-4 p-4">
            <h2 className="text-2xl font-semibold mb-4">{patch?.title || title}</h2>
            <Divider />
            <div className="my-4">
            {!patch && (
                <>
                    <Skeleton className="h-[100px] w-[100px] mb-3 rounded-sm" />
                    <Skeleton className="w-[187px] h-[18px] mb-1 rounded-sm" />
                    <Skeleton className="w-[187px] h-[18px] mb-1 rounded-sm" />
                </>
            )}
            {patch && (
                <>
                    <Image
                        src={patch.image}
                        alt={patch.title}
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <p className="font-semibold">Åldersgrupper:</p>
                    <div className="flex items-center gap-2">
                        {patch?.age_groups &&
                            patch.age_groups.map((age_group) => {
                            const ageGroup = patches.ageGroups.find((ag) => ag.id === age_group);
                            return (
                                <PatchListAgeIcon key={age_group} age_group={ageGroup} />
                            );
                            })}
                    </div>
                    <p>{patch.description}</p>
                    <p className="font-semibold">Krav:</p>
                    <Loadingbar
                        locked={!user.user}
                        barWidth={(requirements.length / patch.requirements.length) * 100}
                    />
                    <ul className="pl-4">
                        {patch.requirements.map((requirement, index) => (
                            <PatchRequirement
                                key={requirement}
                                requirement={requirement}
                                checked={requirements.includes(index)}
                                onChange={(checked) => {
                                    if(requirements.includes(index)) {
                                        setRequirements(requirements.filter((req) => req !== index));
                                    }
                                    else {
                                        setRequirements([...requirements, index]);
                                    }
                                }}
                            />
                        ))}
                    </ul>
                </>
            )}
            </div>
        </Card>
    )
};

export default PatchDetails;