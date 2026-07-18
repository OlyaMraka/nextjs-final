import HeaderComponent from "@/src/components/header/HeaderComponent";
import MovieList from "@/src/components/movieList/MovieList";
import PaginationComponent from "@/src/components/pagination/Pagination";
import {MoviesPageProps} from "@/src/models/movieModels/MoviePageParams";

const MoviePage = async ({searchParams}: MoviesPageProps) => {
    const params = await searchParams;

    const page = Number(params.page) || 1;
    const genres = params.genres as string | undefined;
    const query = params.query as string | undefined;

    return (
        <div className="movie-page">
            <HeaderComponent/>
            <MovieList page={page} filterGenres={genres} query={query}/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviePage;
