"use client"

import { useEffect, useRef, useState } from "react"

//The achivement should have a twinkling animation

const ROOT_DURATION = 3000;
const ROOT_LOOP = ROOT_DURATION / 5;

const _stars = [
    {
      "top": 10,
      "left": 5
    },
    {
      "top": 78,
      "left": 40
    },
    {
      "top": 30,
      "left": 43
    },
    {
      "top": 30,
      "left": 28
    },
    {
      "top": 84,
      "left": 8
    },
    {
      "top": 57,
      "left": 25
    },
    {
      "top": 82,
      "left": 80
    },
    {
      "top": 54,
      "left": 40
    },
    {
      "top": 70,
      "left": 73
    },
    {
      "top": 46,
      "left": 23
    },
    {
      "top": 59,
      "left": 69
    },
    {
      "top": 13,
      "left": 5
    },
    {
      "top": 67,
      "left": 24
    },
    {
      "top": 64,
      "left": 20
    },
    {
      "top": 8,
      "left": 29
    },
    {
      "top": 73,
      "left": 82
    },
    {
      "top": 76,
      "left": 75
    },
    {
      "top": 48,
      "left": 6
    },
    {
      "top": 50,
      "left": 30
    },
    {
      "top": 7,
      "left": 41
    },
    {
      "top": 62,
      "left": 57
    }
  ]

const TwinklingStar = ({
    color = "bronze",
    top = 10,
    left = 5,
    animationDelay =  ROOT_LOOP,
    animationDuration = ROOT_LOOP,    
}) => {
    return (
        <div className="absolute w-3 h-3 animate-twinkling opacity-0"
            style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${animationDelay}ms`,
                animationDuration: `${animationDuration}ms`,
            }}
            >
            <svg 
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 122.88"
                className={`${color}`}
                >
                <g>
                    <path 
                    fill="currentColor"
                    class="st0" d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z"
                /></g>
            </svg>
        </div>
    )
}

const AchievementListItem = ({ achievement }) => {
    const [stars, setStars] = useState([])
    const iteration = useRef(0)
    
    useEffect(() => {
        setInterval(() => {
            if(iteration.current * 5 >= _stars.length) iteration.current = 0
            let nextStars = _stars.slice(iteration.current * 5, (iteration.current + 1) * 5)
            setStars(nextStars.map((star, index) => ({
                ...star,
                animationDelay: index * ROOT_LOOP,
                animationDuration: ROOT_LOOP,
                trueIndex: iteration.current * 5 + index
            })))
            iteration.current += 1
        }, ROOT_DURATION)
        
    }, [])

    return (
        <div className="flex flex-row gap-4">
            <div className={`
                h-16 w-16 p-1 
                relative border-4 
                rounded-full shadow-md
                ${achievement.colors.border}
                ${achievement.colors.bg}
                ${achievement.achived ? "filter-none" : "grayscale"}
            `}>

                {achievement.achived && stars.map((star, index) => (
                    <TwinklingStar key={star.trueIndex} {...star} color={achievement.colors.text}/>
                ))}
                <img
                    src={achievement.img}
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