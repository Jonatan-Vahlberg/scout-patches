"use client";
import { useCallback, useEffect, useRef } from 'react';
import { usePatches } from '../../../context/PatchContext';



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
            className='overflow-y-auto h-[calc(100vh-82px)]'
        >
            {!patches.patchesLoading && patches.shownPatches.map(patch => (
                <div key={patch.id}>
                    <h2>{patch.title}</h2>
                    <p>{patch.description}</p>
                </div>
            ))}
            {patches.patchesLoading && <p>Loading...</p>}
        </div>
    );
}

export default PatchList;