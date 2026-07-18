import {type FC} from "react";
import "./movie-list.css";
import {MovieListComponentProps} from "@/src/models/movieModels/ComponentsProps";
import MovieCard from "@/src/components/movieCard/MovieCard";
import {getGenres, getMoviesByPage, searchMovie} from "@/src/services/api.service";

const MovieList: FC<MovieListComponentProps> = async ({page, filterGenres, query}) => {
    const genres = await getGenres();
    const movies = query ? (await searchMovie(page, query || "")) : (await getMoviesByPage(page, filterGenres || ""));

    return (
        <div className="movie-container">
            {
                movies && movies.map(movie => (<MovieCard key={movie.id} movie={movie} genres={genres}/>))
            }
        </div>
    );
};

export default MovieList;
