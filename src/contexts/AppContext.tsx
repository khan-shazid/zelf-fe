import React, {createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect, useState} from 'react';

type AppContext = {
    
}

const defaultAppContext: AppContext = {
    
};

const ctx = createContext<AppContext>(defaultAppContext);

export const useAppContext = () => {
    return useContext<AppContext>(ctx);
};

type AppContextProps = {
    children: ReactNode;
}

export const AppContextProvider = ({children}: AppContextProps) => {
    

    return (
        <ctx.Provider value={{
            
        }}>
            {children}
        </ctx.Provider>
    );
};