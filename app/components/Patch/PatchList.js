"use client";
import { useCallback, useEffect, useRef } from 'react';
import { usePatches } from '../../../context/PatchContext';
import PatchListItem from './PatchListItem';
import PatchListFilters from './PatchListFilters';



const PatchList = () => {
    const patches = usePatches();
    const listRef = useRef(null);

    const handleScroll = useCallback((e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        console.log("Scrolling: ", scrollTop, scrollHeight, clientHeight);
        if(patches.patchesLoading) return;
        if(patches.patches.length === patches.shownPatches.length) return;
        if(scrollTop + clientHeight >= scrollHeight) {

            patches.setPatchFilters(state => ({
                ...state,
                page: state.page + 1,
            
            }));
        }
    }, [patches.patchesLoading, patches.patches.length, patches.shownPatches.length]);

    return (
        <div
            onScroll={handleScroll}
            className='overflow-y-auto h-[calc(100vh-82px)] w-full p-4 gap-6'
        >
            <PatchListFilters 
                age_groups={patches.ageGroups}
                filters={patches.patchFilters}
                setFilters={patches.setPatchFilters}
            />
            {!patches.patchesLoading && patches.shownPatches.map(patch => (
                <PatchListItem key={patch.id} patch={patch} 
                    ageGroups={patches.ageGroups}
                />
            ))}
            {patches.patchesLoading && <p>Loading...</p>}
        </div>
    );
}

export default PatchList;