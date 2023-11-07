"use client"

import { useEffect, useState } from "react"

//The achivement should have a twinkling animation

const TwinklingStar = ({
    top = 10,
    left = 5,
    animationDelay =  0
}) => {
    return (
        <div className="absolute w-3 h-3 animate-ping"
            style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${animationDelay}ms`,
                animationDuration: '3000ms'
            }}
            >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
            >
                <polygon
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="currentColor"
                    points="20,1 24,12 36,12 26,20 30,32 20,24 10,32 14,20 4,12 16,12"
                ></polygon>
            </svg>
        </div>
    )
}

const AchievementListItem = ({ achievement }) => {
    const [stars, setStars] = useState([])

    useEffect(() => {
        setInterval(() => {
            generateStars()
        }, 3000)

        const generateStars = () => {
            const stars = []
            for (let i = 0; i < 5; i++) {
                stars.push({
                    top: Math.floor(Math.random() * 100),
                    left: Math.floor(Math.random() * 100),
                    animationDelay: i * 300
                })
            }
            setStars(stars)
        }
        
    }, [])

    return (
        <div className="flex flex-row gap-4">
            <div className="h-16 w-16 p-1 relative border-4 border-emerald rounded-full bg-emerald-light">

                {stars.map((star, index) => (
                    <TwinklingStar key={index} {...star}/>
                ))}
                <img
                    src="/images/age_groups/achivements/0_emerald.svg"
                    alt={achievement.title}
                    className="w-full h-full rounded-full object-contain filter-bronze"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                <p className="text-sm">{achievement.description}</p>
            </div>
        </div>
    )
}

export default AchievementListItem