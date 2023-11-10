"use client"

import { createContext, useState, useEffect, useRef, useContext } from 'react';
import { useUser } from './UserContext';
import { usePatches } from './PatchContext';
import AchivementKit from '@/utils/AchivementKit';

const defaultState = {
    achivements: [],
    achivementsLoading: false,
}

const AchivementContext = createContext(defaultState);

const AchivementProvider = ({ children }) => {
    const user = useUser();
    const patches = usePatches();
    
    const [achivements, setAchivements] = useState(defaultState.achivements);
    const [achivementsLoading, setAchivementsLoading] = useState(defaultState.achivementsLoading);
    const kit = useRef(new AchivementKit())
    useEffect(() => {
        if(patches.patches.length > 0 && patches.ageGroups.length > 0) {
            
            kit.current.updateKit(patches.patches, patches.ageGroups, user.userPatches);
            const achivements = kit.current.getAchivements();
            
            setAchivements(achivements);
            setAchivementsLoading(false);
        }
    },[user.userPatches, patches.ageGroups, user.userPatches]);

    return (
        <AchivementContext.Provider
            value={{
                achivements,
                achivementsLoading,
            }}
        >
            {children}
        </AchivementContext.Provider>
    )
}

const useAchivements = () => {
    return useContext(AchivementContext);
}

export { AchivementProvider, useAchivements };