import { firebaseLogin } from "@/firebase/auth";
import { addUserPatch as addPatch, updateUserPatch as updatePatch, getUserPatches } from "@/firebase/database/user";
import { auth } from "@/firebase/firebase";
import { createContext, useContext, useEffect, useState } from "react";


const defaultState = {
    user: null,
    userLoading: true,

    userPatches: [],
    userPatchesLoading: true,

    login: (email, password, onLoggedIn = () => {}, onError = () => {}) => {},
    register: (user) => {},
    logout: () => {},
    addUserPatch: (patch, onResponsiveAgain = () => {}) => {},
    updateUserPatch: (patch, onResponsiveAgain = () => {}) => {},
};

const UserContext = createContext(defaultState);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(defaultState.user);
    const [userLoading, setUserLoading] = useState(defaultState.userLoading);

    const [userPatches, setUserPatches] = useState(defaultState.userPatches);
    const [userPatchesLoading, setUserPatchesLoading] = useState(defaultState.userPatchesLoading);

    useEffect(() => {
       auth.onAuthStateChanged(async (user) => {
              if(user) {
               _onUser(user);
              } else {
                setUser(null);
                setUserLoading(false);
              }
         });
    },[]);

    useEffect(() => {
        if(user) {
            _getUserPatches();
        }
    },[user])

    const _onUser = (user) => {
        setUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            accessToken: user.accessToken,
        });
        setUserLoading(false);
    }

    

    const login = async (email, password, onLoggedIn = () => {}, onError = () => {}) => {
        setUserLoading(true);
        const response = await firebaseLogin(email, password);
        
        if(response.user) {
            _onUser(response.user);
            onLoggedIn();
        } else {
            onError(response);
            setUserLoading(false);
        }
    }

    const _getUserPatches = async () => {
        if(!user) return;
        setUserPatchesLoading(true);
        const response = await getUserPatches(user.uid);
        
        setUserPatches(response);
        setUserPatchesLoading(false);
    }

    const addUserPatch = async (patch,onResponsiveAgain = () => {}) => {
        if(!user) return;
        const response = await addPatch(user.uid, patch);
        if(response.status === "success") {
            setUserPatches([...userPatches, patch]);
        }   
        onResponsiveAgain();
    }

    const updateUserPatch = async (patch, onResponsiveAgain = () => {}) => {
        if(!user) return;
        const response = await updatePatch(user.uid, patch.id, patch);
        if(response.status === "success") {
            const _userPatches = userPatches.map((_patch) => {
                if(_patch.id === patch.id) {
                    return patch;
                }
                return _patch;
            });
            console.log("success", _userPatches);
            setUserPatches(_userPatches);
        }
        onResponsiveAgain();
    }

    return (
        <UserContext.Provider value={{
            user,
            userLoading,
            userPatches,
            userPatchesLoading,
            login,
            addUserPatch,
            updateUserPatch,
        }}>
            {children}
        </UserContext.Provider>
    );

}

const useUser = () => {
    const context = useContext(UserContext);
    if(context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

export { UserProvider, useUser };