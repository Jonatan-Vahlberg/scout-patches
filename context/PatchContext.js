import { getAgeGroups, getPatches } from "@/firebase/database/patches";

const { createContext, useState, useEffect, useContext } = require("react");


const defaultState = {
    patchFilters: {
        page: 1,
    },
    patches: [],
    shownPatches: [],
    patchesLoading: true,
    ageGroups: [],
    ageGroupsLoading: false,
    setPatchFilters: (filters) => {},
};

const PatchContext = createContext(defaultState);

const PatchProvider = ({ children }) => {
    const [patchFilters, setPatchFilters] = useState(defaultState.patchFilters);
    const [patches, setPatches] = useState(defaultState.patches);
    const [shownPatches, setShownPatches] = useState(defaultState.shownPatches);
    const [patchesLoading, setPatchesLoading] = useState(defaultState.patchesLoading);

    const [ageGroups, setAgeGroups] = useState(defaultState.ageGroups);
    const [ageGroupsLoading, setAgeGroupsLoading] = useState(defaultState.ageGroupsLoading);

    useEffect(() => {
        _getPatches()
        _getAgeGroups();
    }, []);

    useEffect(() => {
        _filterPatches();
    }, [patchFilters, patches]);

    const _filterPatches = () => {
        const { title, age_group, page } = patchFilters;
        
        let _shownPatches = patches.filter((patch, index) => {
            if(title && !patch.title.toLowerCase().includes(title.toLowerCase())) {
                return false;
            }
            if(age_group && patch.age_groups && !patch.age_groups.includes(age_group)) {
                return false;
            }

            return true;
        });
        _shownPatches = _shownPatches.slice(0, page * 10);
        setShownPatches(_shownPatches);
    }

    const _getPatches = async () => {
        setPatchesLoading(true);
        const response = await getPatches()
        setPatches(response);
        setPatchesLoading(false);
    }

    const _getAgeGroups = async () => {
        setAgeGroupsLoading(true);
        const response = await getAgeGroups()
        setAgeGroups(response);
        setAgeGroupsLoading(false);
    }

    return (
        <PatchContext.Provider value={{
            patches,
            shownPatches,
            patchesLoading,
            ageGroups,
            ageGroupsLoading,
            setPatchFilters,
        }}>
            {children}
        </PatchContext.Provider>
    );

}

const usePatches = () => {
    const context = useContext(PatchContext);
    if(context === undefined) {
        throw new Error("usePatches must be used within a PatchProvider");
    }
    return context;
}

export { PatchProvider, usePatches };