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
        console.log("Filtering patches: ", patchFilters)
        const _shownPatches = patches.filter((patch, index) => {
            if(title && !patch.title.toLowerCase().includes(title.toLowerCase())) {
                return false;
            }
            if(age_group && !patch.age_groups.includes(age_group)) {
                return false;
            }
            if(page) {
                const end = page * 10;
                return index < end;
            }
            return true;
        });
        setShownPatches(_shownPatches);
    }
    console.log("FIlters", patchFilters)
    const _getPatches = async () => {
        setPatchesLoading(true);
        const url = "api/patches";
        const res = await fetch(url)
        const data = await res.json();
        console.log("Patches: ", data);
        if(data.status === 200) {
            setPatches(data.data);
        }
        setPatchesLoading(false);
    }

    const _getAgeGroups = async () => {
        setAgeGroupsLoading(true);
        const url = "api/age-groups";
        const res = await fetch(url);
        const data = await res.json();
        console.log("Age groups: ", data);
        if(data.status === 200) {
            setAgeGroups(data.data.sort((a, b) => a.index - b.index));
        }
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