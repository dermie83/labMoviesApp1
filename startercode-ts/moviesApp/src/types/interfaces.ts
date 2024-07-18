export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    must_watch?: boolean;
    genre_ids?: number[];
  }

  export interface BaseMovieListProps { 
    movies: BaseMovieProps[];
    action: (m: BaseMovieProps) => React.ReactNode;
  }

  export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[];
    production_countries: {
        iso_3166_1?: string;
        name: string;
      }[];
  }

  export interface MovieImage {
    file_path: string;
    aspect_ratio?: number; //some props are optional...
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
  }
  
  export interface MoviePageProps {
    movie: MovieDetailsProps;
    images: MovieImage[];
  }

  export type FilterOption = "title" | "genre" | "cast";

  export interface MovieListPageTemplateProps extends BaseMovieListProps {
    title: string;
  }

  export interface CastCardProps  {
    cast: CastMembers[];
  }

  export interface CastListPageTemplateProps extends CastCardProps {
    title: string;
  }


  export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }

export interface CastMembers {
    id: number
    adult: boolean
    gender?: number[]
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id?: number[]
    character: string
    credit_id: string
    order: number
}

export interface CastMember {
  id: number
  biography:string;
}


  export interface GenreData {
    genres: {
      id: string;
      name: string
    }[];
  }

  export interface CastMembersData {
    results: {
      id: string;
      name: string;
      known_for_department: string;
      popularity: number
    }[];
  }
  
  export interface DiscoverMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseMovieProps[];
  }

  export interface DiscoverCast {
    page: number;	
    total_pages: number;
    total_results: number;
    results: CastMember[];
  }