import { firebaseLogin } from "@/firebase/auth";
import { auth } from "@/firebase/firebase";
import { createContext, useContext, useEffect, useState } from "react";


const defaultState = {
    user: null,
    userLoading: true,

    userPatches: [],
    userPatchesLoading: true,

    login: (email, password, onLoggedIn = () => {}, onError = () => {}) => {},
    register: (user) => {},
    updateUserPatch: (patch) => {},
    logout: () => {},
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
                setUser(user);
                setUserLoading(false);
              } else {
                setUser(null);
                setUserLoading(false);
              }
         });
    },[]);

    console.log("USER:: ", user)

    const login = async (email, password, onLoggedIn = () => {}, onError = () => {}) => {
        setUserLoading(true);
        const response = await firebaseLogin(email, password);
        console.log("RESPONSE:: ", response)
        if(response.user) {
            setUser(response.user);
            setUserLoading(false);
            onLoggedIn();
        } else {
            onError(response);
            setUserLoading(false);
        }
    }

    return (
        <UserContext.Provider value={{
            user,
            userLoading,
            userPatches,
            userPatchesLoading,
            login,
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