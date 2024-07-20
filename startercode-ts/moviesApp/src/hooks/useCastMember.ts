import { useEffect, useState } from "react";
import { getCastMember } from '../api/tmdb-api'
import { CastMembers } from '../types/interfaces'

type CastHookReturnType = [CastMembers | undefined, React.Dispatch<React.SetStateAction<CastMembers | undefined>>];

const useCastMember  = (id: string):CastHookReturnType  => {
    const [castMember, setCastMember] = useState<CastMembers>();
    useEffect(() => {
        getCastMember(id).then(castMember => {
            setCastMember(castMember);
        });
    }, [id]);
    return [castMember, setCastMember];
};

export default useCastMember