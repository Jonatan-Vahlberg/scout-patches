import { useAchivements } from "@/context/Achivements"
import AchievementListItem from "./AchivementListItem"
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const UserAchievements = () => {
    const achievements = useAchivements()
    const [isOpen, setIsOpen] = useState(false)

    const Icon = isOpen ? FaChevronDown : FaChevronUp;
    return (
        <div className="flex flex-col flex-1 overflow-hidden">
            <h2 className="text-2xl font-semibold my-4">Dina Utmärkelser</h2>
            {/* Fade out at bottom if closed */}
            <div className={`relative overflow-y-hidden ${isOpen ? "h-[unset]" : "h-72"} flex flex-col gap-4 p-4
                transition-all duration-500 ease-in-out mb-8`}>
                {achievements.achivements.map((achievement, index) => (
                    <AchievementListItem
                        key={achievement.title}
                        achievement={achievement}
                        index={index}
                    />
                ))}
                <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t ${
                    isOpen ? "from-transparent to-transparent" : "from-white to-transparent"
                } transition-all duration-500 ease-in-out
                }`}>
                    <button
                        className={`relative w-full h-full flex justify-center items-center ${
                            isOpen ? "bottom-[-24px]" : ""
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Icon className="text-xl"/>
                    </button>
                </div>
            </div>
            <div className="hidden border-bronze bg-bronze-light text-bronze filter-none"/>
            <div className="hidden border-silver bg-silver-light text-silver grayscale blur-[1px]"/>
            <div className="hidden border-gold bg-gold-light text-gold"/>
            <div className="hidden border-emerald bg-emerald-light text-emerald"/>
        </div>
    )
}

export default UserAchievements