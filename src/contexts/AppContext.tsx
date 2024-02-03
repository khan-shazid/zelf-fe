import React, {createContext, ReactNode, useContext} from 'react';

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
    
    // TODO:: we can handle token validating here before give access to app
    return (
        <ctx.Provider value={{
            
        }}>
            {children}
        </ctx.Provider>
    );
};