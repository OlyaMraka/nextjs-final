import type {FC} from "react";
import "./movie-info.css";
import GenreBadge from "@/src/components/movieInfo/genreBadge/GenreBadge";
import {MovieInfoProps} from "@/src/models/movieModels/ComponentsProps";

const MovieInfo: FC<MovieInfoProps> = ({movie, genres}) => {
    return (
        <div className="movie-card-main-info">
            <h4>{movie.title}</h4>
            <div className="additional-info">
                <p>{movie.overview}</p>
                <span>Release date: {movie.release_date}</span>
                <span>Rating: {movie.vote_average ? `${movie.vote_average}/10` : "No rating"}</span>
            </div>
            <div className="movie-genres-block">
                {
                    genres.map(genre => (<GenreBadge key={genre.id} genreName={genre.name}/>))
                }
            </div>
        </div>
    );
};

export default MovieInfo;
