import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesHomePage from "./pages/moviesHomePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import SiteContextProvider from "./contexts/siteContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import PopularPersonsPage from "./pages/castPage";
import CastDetailsPage from "./pages/castDetailsPage";
import TrendingTVPage from "./pages/trendingTVPage";
import MustWatchTrendingTVPage from "./pages/mustWatchTVPage";
import TVHomePage from "./pages/tvHomePage";
import TVPage from "./pages/tvShowDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
          <SiteContextProvider>
            <Routes>
              <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
              <Route path="/reviews/:id" element={<MovieReviewPage/>} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route path="/movies/mustwatch" element={<MustWatchMoviesPage />} />
              <Route path="/movies/popular" element={<PopularMoviesPage />} />
              <Route path="/cast" element={<PopularPersonsPage />} />
              <Route path="/tv" element={<TVHomePage />} />
              <Route path="/tv/trendingNow" element={<TrendingTVPage />} />
              <Route path="/tv/mustwatch" element={<MustWatchTrendingTVPage />} />
              <Route path="/tv/:id" element={<TVPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/castmember/:id" element={<CastDetailsPage />} />
              <Route path="/movies" element={<MoviesHomePage />} />
              <Route path="/" element={<MoviesHomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </SiteContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider> 
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)