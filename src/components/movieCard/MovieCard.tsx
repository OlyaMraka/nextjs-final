import type {FC} from "react";
import Link from "next/link";
import PosterPreview from "@/src/components/posterPreview/PosterPreview";
import MovieInfo from "@/src/components/movieInfo/MovieInfo";
import CustomStarRatingComponent from "@/src/components/startRating/StarRating";
import {MovieCardComponentProps} from "@/src/models/movieModels/ComponentsProps";
import "./movie-card.css";

const MovieCard: FC<MovieCardComponentProps> = ({movie, genres}) => {
    const movieGenres = genres.filter(genre => movie.genre_ids.includes(genre.id));

    return (
        <Link href={`/movie/${movie.id}`} className="movie-card-link">
            <div className="movie-card-block">
                <PosterPreview imagePath={movie.poster_path} imageAlt={movie.title}/>
                <MovieInfo movie={movie} genres={movieGenres}/>
                <CustomStarRatingComponent rate={movie?.vote_average/2}/>
            </div>
        </Link>
    );
};

export default MovieCard;
