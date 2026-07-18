import {Movie} from "@/src/models/movieModels/Movie";

export type MovieSliceType = {
    movies: Movie[];
    page: number;
}

export type LoadMoviesParams = {
    page: number;
    withTypes: string;
}

export type SearchMovieParams = {
    page: number;
    query: string;
}