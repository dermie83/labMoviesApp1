import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review, BaseTrendingTVProps } from "../types/interfaces";


interface MovieContextInterface {
    favourites: number[];
    addToFavourites: ((movie: BaseMovieProps) => void);
    removeFromFavourites: ((movie: BaseMovieProps) => void);
    addReview: ((movie: BaseMovieProps, review: Review) => void);
    mustWatch: number[];
    addToMustWatch: ((movie: BaseMovieProps) => void);
    removeFromMustWatch: ((movie: BaseMovieProps) => void);
    mustWatchTV: number[];
    addToMustWatchTV: ((trendingTV: BaseTrendingTVProps) => void);
    removeFromMustWatchTV: ((trendingTV: BaseTrendingTVProps) => void);
}
const initialContextState: MovieContextInterface = {
    favourites: [],
    addToFavourites: () => { },
    removeFromFavourites: () => { },
    addReview: (movie, review) => { movie.id, review},
    mustWatch: [],
    addToMustWatch: () => { },
    removeFromMustWatch: () => { },
    mustWatchTV: [],
    addToMustWatchTV: () => { },
    removeFromMustWatchTV: () => { },
};

export const SiteContext = React.createContext<MovieContextInterface>(initialContextState);

const SiteContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [favourites, setFavourites] = useState<number[]>([]);
    const [myReviews, setMyReviews] = useState<Review[]>([]);
    const [mustWatch, setMustWatch] = useState<number[]>([]);
    const [mustWatchTV, setMustWatchTV] = useState<number[]>([]);

    const addToFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(movie.id)) {
                return [...prevFavourites, movie.id];
            }
            return prevFavourites;
        });
    }, []);

    const addToMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatch) => {
            if (!prevMustWatch.includes(movie.id)) {
                return [...prevMustWatch, movie.id];
            }
            return prevMustWatch;
        });
    }, []);

    const addToMustWatchTV = useCallback((trendingTV: BaseTrendingTVProps) => {
        setMustWatchTV((prevMustWatch) => {
            if (!prevMustWatch.includes(trendingTV.id)) {
                return [...prevMustWatch, trendingTV.id];
            }
            return prevMustWatch;
        });
    }, []);

    const addReview = (movie:BaseMovieProps, review: Review) => {
        setMyReviews( {...myReviews, [movie.id]: review } )
      };

    const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !== movie.id));
    }, []);

    const removeFromMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatch) => prevMustWatch.filter((mId) => mId !== movie.id));
    }, []);

    const removeFromMustWatchTV = useCallback((trendingTV: BaseTrendingTVProps) => {
        setMustWatch((prevMustWatch) => prevMustWatch.filter((tvId) => tvId !== trendingTV.id));
    }, []);

    


    return (
        <SiteContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
                mustWatch,
                addToMustWatch,
                removeFromMustWatch,
                mustWatchTV,
                addToMustWatchTV,
                removeFromMustWatchTV,
                
            }}
        >
            {children}
        </SiteContext.Provider>
    );
};

export default SiteContextProvider;