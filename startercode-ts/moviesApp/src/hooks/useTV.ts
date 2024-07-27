import { useEffect, useState } from "react";
import { getTVShow } from '../api/tmdb-api'
import { TVDetailsProps } from '../types/interfaces'

type TVHookReturnType = [TVDetailsProps | undefined, React.Dispatch<React.SetStateAction<TVDetailsProps | undefined>>];

const useTVShow  = (id: string):TVHookReturnType  => {
    const [tvShow, setTVShow] = useState<TVDetailsProps>();
    useEffect(() => {
        getTVShow(id).then(tv => {
            setTVShow(tv);
        });
    }, [id]);
    return [tvShow, setTVShow];
};

export default useTVShow