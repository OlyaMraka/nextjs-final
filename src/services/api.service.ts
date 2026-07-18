import {Genre} from "@/src/models/genreModels/GenreTypes";
import {Movie} from "@/src/models/movieModels/Movie";
import {MovieInfo} from "@/src/models/movieModels/MovieInfo";

const apiKey = process.env.VITE_MOVIE_API_KEY;
const apiUrl = process.env.VITE_MOVIE_API_URL


export const getGenres = async (): Promise<Genre[]> => {
    const { genres } = await fetch(`${apiUrl}/genre/movie/list`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
    }).then(res => res.json());

    return genres;
};

export const getMoviesByPage = async (page: number, with_genres: string): Promise<Movie[]> => {
    const params = new URLSearchParams({
        page: page.toString(),
        with_genres,
    });

    const response = await fetch(`${apiUrl}/discover/movie?${params.toString()}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
    }).then(res => res.json());

    return response.results;
};

export const getMovieById = async (movieId: number): Promise<MovieInfo> => {
    return await fetch(`${apiUrl}/movie/${movieId}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
    }).then(res => res.json());
};

export const searchMovie = async (page: number, query: string): Promise<Movie[]> => {
    const params = new URLSearchParams({
        page: page.toString(),
        query,
    });

    const response = await fetch(`${apiUrl}/search/movie?${params.toString()}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
    }).then(res => res.json());

    return response.results;
};
