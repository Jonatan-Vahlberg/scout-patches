import { Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import PatchListAgeIcon from "./PatchListAgeIcon";
import PatchLoadingBar from "./PatchLoadingBar";


const PatchListItem = ({ patch, ageGroups = [] }) => {

    return (
        <Card className='flex flex-col p-4 mb-4'>
            <div className="flex items-start gap-3">
                <div>
                    <Image 
                        src={patch.image} 
                        alt={patch.title}
                        width={100} 
                        height={100} 
                        className='object-contain' 
                    />
                </div>
                <div className="w-full">
                    <h3 className='text-xl font-semibold'>{patch.title}</h3>
                    <hr className="my-1"></hr>
                    <div className="flex items-center gap-2">
                        
                        {patch?.age_groups && patch.age_groups.map(age_group => {
                            console.log(age_group, ageGroups);
                            const ageGroup = ageGroups.find(ag => ag.id === age_group);
                            return <PatchListAgeIcon key={age_group} age_group={ageGroup} />
                        })}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-2 mt-4 overflow-hidden">
                <p className="text-sm line-clamp-2">{patch.description}</p>
                <p className="text-sm">{patch.notes}</p>
            </div>
            <PatchLoadingBar patch={patch} />
        </Card>
    );
};

export default PatchListItem;