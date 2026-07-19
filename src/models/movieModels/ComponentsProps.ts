import {Movie} from "@/src/models/movieModels/Movie";
import {Genre} from "@/src/models/genreModels/GenreTypes";
import {SearchParams} from "next/dist/server/request/search-params";

export type MovieCardComponentProps = {
    movie: Movie;
    genres: Genre[]
}

export type StarRatingComponentProps = {
    rate: number;
}

export type BadgeComponentProps = {
    name: string;
}

export type PosterPreviewComponentProps = {
    imagePath: string;
    imageAlt: string;
}

export type MovieInfoProps = {
    movie: Movie;
    genres: Genre[]
}

export type MovieListComponentProps = {
    page: number;
    genres: Genre[];
    filterGenres?: string;
    query?: string;
}

export type HeaderComponentProps = {
    genres: Genre[];
}
