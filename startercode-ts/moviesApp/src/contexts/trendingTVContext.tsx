import React, { useState, useCallback } from "react";
import { BaseTrendingTVProps } from "../types/interfaces";


interface TrendingTVContextInterface {
    mustWatch: number[];
    addToMustWatchTV: ((trendingTV: BaseTrendingTVProps) => void);
    removeFromMustWatch: ((trendingTV: BaseTrendingTVProps) => void);
}
const initialContextState: TrendingTVContextInterface = {
    mustWatch: [],
    addToMustWatchTV: () => { },
    removeFromMustWatch: () => { },
};

export const TrendingTVContext = React.createContext<TrendingTVContextInterface>(initialContextState);

const TrendingTVContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [mustWatch, setMustWatch] = useState<number[]>([]);


    const addToMustWatchTV = useCallback((trendingTV: BaseTrendingTVProps) => {
        setMustWatch((prevMustWatch) => {
            if (!prevMustWatch.includes(trendingTV.id)) {
                return [...prevMustWatch, trendingTV.id];
            }
            return prevMustWatch;
        });
    }, []);

    const removeFromMustWatch = useCallback((trendingTV: BaseTrendingTVProps) => {
        setMustWatch((prevMustWatch) => prevMustWatch.filter((tvId) => tvId !== trendingTV.id));
    }, []);


    return (
        <TrendingTVContext.Provider
            value={{
                mustWatch,
                addToMustWatchTV,
                removeFromMustWatch,
                
            }}
        >
            {children}
        </TrendingTVContext.Provider>
    );
};

export default TrendingTVContextProvider;