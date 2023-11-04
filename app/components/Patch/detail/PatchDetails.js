"use client";

import { usePatches } from "@/context/PatchContext";
import { Card, Divider, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PatchListAgeIcon from "../PatchListAgeIcon";
import PatchRequirement from "./PatchRequirement";

const PatchDetails = () => {
    const { id } = useParams();
    const searchParams = useSearchParams()
    const title = searchParams.get("title");

    const patches = usePatches();

    const [patch, setPatch] = useState(null);

    useEffect(() => {
        if(patches.patches.length > 0) {
            const patch = patches.patches.find((patch) => patch.id === id);
            setPatch(patch);
        }
    },[patches.patches, id])

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
                    <ul className="pl-4">
                        {patch.requirements.map((requirement, index) => (
                            <PatchRequirement
                                key={requirement}
                                patch={patch}
                                requirement={requirement}
                                index={index}
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