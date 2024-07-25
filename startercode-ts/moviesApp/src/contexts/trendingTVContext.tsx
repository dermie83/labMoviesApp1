import React, { useState, useCallback } from "react";
import { BaseTrendingTVProps } from "../types/interfaces";


interface TrendingTVContextInterface {
    mustWatch: number[];
    addToMustWatch: ((trendingTV: BaseTrendingTVProps) => void);
    removeFromMustWatch: ((trendingTV: BaseTrendingTVProps) => void);
}
const initialContextState: TrendingTVContextInterface = {
    mustWatch: [],
    addToMustWatch: () => { },
    removeFromMustWatch: () => { },
};

export const TrendingTVContext = React.createContext<TrendingTVContextInterface>(initialContextState);

const TrendingTVContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [mustWatch, setMustWatch] = useState<number[]>([]);


    const addToMustWatch = useCallback((trendingTV: BaseTrendingTVProps) => {
        setMustWatch((prevMustWatch) => {
            if (!prevMustWatch.includes(trendingTV.id)) {
                return [...prevMustWatch, trendingTV.id];
            }
            return prevMustWatch;
        });
    }, []);

    const removeFromMustWatch = useCallback((trendingTV: BaseTrendingTVProps) => {
        setMustWatch((prevMustWatch) => prevMustWatch.filter((ttvId) => ttvId !== trendingTV.id));
    }, []);


    return (
        <TrendingTVContext.Provider
            value={{
                mustWatch,
                addToMustWatch,
                removeFromMustWatch,
                
            }}
        >
            {children}
        </TrendingTVContext.Provider>
    );
};

export default TrendingTVContextProvider;