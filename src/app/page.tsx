import HeaderComponent from "@/src/components/header/HeaderComponent";
import MovieList from "@/src/components/movieList/MovieList";
import PaginationComponent from "@/src/components/pagination/Pagination";
import {MoviesPageProps} from "@/src/models/movieModels/MoviePageParams";
import {getGenres} from "@/src/services/api.service";

const MoviePage = async ({searchParams}: MoviesPageProps) => {
    const params = await searchParams;
    const genres = await getGenres();

    const page = Number(params.page) || 1;
    const selectedGenres = params.genres as string | undefined;
    const query = params.query as string | undefined;

    return (
        <div className="movie-page">
            <HeaderComponent genres={genres}/>
            <MovieList page={page} genres={genres} filterGenres={selectedGenres} query={query}/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviePage;
