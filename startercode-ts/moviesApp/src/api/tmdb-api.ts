export const getMovies = (page = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getTVShows = (page = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch tv. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};
  
export const getMovie = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

export const getTVShow = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get tv data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

  export const getMovieGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
    ).then( (response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch movie genres. Response status: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getTVGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/tv/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
    ).then( (response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch tv genres. Response status: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieImages = (id: string | number) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("failed to fetch images");
      }
      return response.json();
    }).then((json) => json.posters)
      .catch((error) => {
        throw error
      });
  };

  export const getCastMember = (person_id: string | number) => {
    return fetch(
      `https://api.themoviedb.org/3/person/${person_id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to get movie data. Response status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  //`https://api.themoviedb.org/3/movie/1022789/images?api_key=6abaacc8d8d55c12e7c3b2ff08754395`
   `https://api.themoviedb.org/3/person/500?api_key=6abaacc8d8d55c12e7c3b2ff08754395&language=en-US`

  export const getMovieReviews = (id: string | number) => { //movie id can be string or number
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies = (page=1) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
    )
    .then((response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch ucoming movies. Response status: ${response.status}`);
      return response.json();
    })
      .catch((error) => {
        throw error
      });
  };
  export const getPopularMovies = (page=1) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
    ).then((response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
      return response.json();
    })
      .catch((error) => {
        throw error
      });
  };

  export const getCast = (page=1) => {
    return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page}`
    ).then((response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch popular persons. Response status: ${response.status}`);
      return response.json();
    })
      .catch((error) => {
        throw error
      });
    };

    export const getTrendingTV = (page=1) => {
      return fetch(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page}`
      ).then((response) => {
        if (!response.ok)
          throw new Error(`Unable to fetch trending TV. Response status: ${response.status}`);
        return response.json();
      })
        .catch((error) => {
          throw error
        });
    };


    // `https://api.themoviedb.org/3/movie/22/images?api_key=6abaacc8d8d55c12e7c3b2ff08754395`
    //`https://api.themoviedb.org/3/movie/1022789?api_key=6abaacc8d8d55c12e7c3b2ff08754395&append_to_response=videos`
    // `https://api.themoviedb.org/3/person/popular?api_key=6abaacc8d8d55c12e7c3b2ff08754395&language=en-US&page=1`

    // https://api.themoviedb.org/3/genre/movie/list?api_key=6abaacc8d8d55c12e7c3b2ff08754395&language=en-US
    