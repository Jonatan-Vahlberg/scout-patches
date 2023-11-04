"use client"

import { Card } from "@nextui-org/react";
import Image from "next/image";
import PatchListAgeIcon from "./PatchListAgeIcon";
import Loadingbar from "../globals/Loadingbar";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import { usePatches } from "@/context/PatchContext";

const PatchListItem = ({ patch }) => {
    const user = useUser();
    const patches = usePatches();
    
    const [userPatch, setUserPatch] = useState(null);

    useEffect(() => {
        if(user.userPatches.length > 0) {
            const userPatch = user.userPatches.find((userPatch) => userPatch.id === patch.id);
            setUserPatch(userPatch);
        }
    },[user.userPatches])

    const getRequirementsPassedPercentage = () => {
        if(userPatch?.requirements_passed) {
            return (userPatch.requirements_passed.length / patch.requirements.length) * 100;
        } else {
            return 0;
        }
    }
  return (
    <Link href={`/patches/${patch.id}?title=${patch.title}`}>
      <Card className="flex flex-col p-4 mb-4">
        <div className="flex items-start gap-3">
          <div>
            <Image
              src={patch.image}
              alt={patch.title}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <div className="w-full">
            <h3 className="text-xl font-semibold">{patch.title}</h3>
            <hr className="my-1"></hr>
            <div className="flex items-center gap-2">
              {patch?.age_groups &&
                patch.age_groups.map((age_group) => {
                  const ageGroup = patches.ageGroups.find((ag) => ag.id === age_group);
                  return (
                    <PatchListAgeIcon key={age_group} age_group={ageGroup} />
                  );
                })}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 mt-4 overflow-hidden">
          <p className="text-sm line-clamp-2">{patch.description}</p>
          <p className="text-sm">{patch.notes}</p>
        </div>
        <Loadingbar 
            locked={!user.user}
            barWidth={getRequirementsPassedPercentage()}
        />
      </Card>
    </Link>
  );
};

export default PatchListItem;
