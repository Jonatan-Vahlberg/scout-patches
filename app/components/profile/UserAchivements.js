import { useAchivements } from "@/context/Achivements"
import AchievementListItem from "./AchivementListItem"
import { useState } from "react"

const UserAchievements = () => {
    const achievements = useAchivements()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex flex-col flex-1 overflow-hidden">
            <h2 className="text-2xl font-semibold my-4">Dina Utmärkelser</h2>
            <div className="overflow-y-auto h-48 flex flex-col flex-1 gap-4 p-4">
                {achievements.achivements.map((achievement, index) => (
                    <AchievementListItem
                        key={achievement.title}
                        achievement={achievement}
                        index={index}
                    />
                ))}
            </div>
            <div className="hidden border-bronze bg-bronze-light text-bronze filter-none"/>
            <div className="hidden border-silver bg-silver-light text-silver grayscale blur-[2px]"/>
            <div className="hidden border-gold bg-gold-light text-gold"/>
            <div className="hidden border-emerald bg-emerald-light text-emerald"/>
        </div>
    )
}

export default UserAchievements