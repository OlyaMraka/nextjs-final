import {type FC} from "react";
import "./movie-page.css";
import PosterPreview from "@/src/components/posterPreview/PosterPreview";
import ProductionCompanyCard from "@/src/components/productionCompanyCard/ProductionCompanyCard";
import Badge from "@/src/components/badge/Badge";
import {MoviePageParams} from "@/src/models/movieModels/MoviePageParams";
import {getMovieById} from "@/src/services/api.service";
import Link from "next/link";

const MoviePage: FC<MoviePageParams> = async ({params}) => {

    const {id} = await params;
    const movieInfo = await getMovieById(id);

    return (
        <div className="movie-page">
            <div className="intro-section-block">
                <Link className="go-back-button" href={"/"}>Go back to movies</Link>

                <PosterPreview imagePath={movieInfo?.backdrop_path || ""} imageAlt={movieInfo?.title || ""}/>

                <div className="info-overlay">
                    <h1>{movieInfo?.title}</h1>
                    <p>{movieInfo?.tagline}</p>
                    <a href={movieInfo?.homepage}>Homepage</a>
                </div>
            </div>

            <div className="movie-overview-section">
                <PosterPreview imagePath={movieInfo?.poster_path || ""} imageAlt={movieInfo?.title || ""}/>

                <div className="overview-additional-info">
                    <div className="movie-genres-block">
                        {
                            movieInfo?.genres.map(genre => (<Badge key={genre.id} name={genre.name}/>))
                        }
                    </div>

                    <p>{movieInfo?.overview}</p>
                </div>
            </div>

            <div className="production-companies-section">
                <h3>Production companies</h3>

                <div className="production-companies-container">
                    {
                        movieInfo?.production_companies.map(company =>
                            (<ProductionCompanyCard key={company.id} company={company}/>))
                    }
                </div>
            </div>

            <div className="movie-additional-info">
                <div className="movie-additional-main">
                    <span>Release date: {movieInfo?.release_date}</span>
                    <span>Vote average: {movieInfo?.vote_average} / 10</span>
                    <span>Runtime: {movieInfo?.runtime} min</span>
                    <span>Budget: {movieInfo?.budget} $</span>
                    <span>Adult: {movieInfo?.adult ? "Yes" : "No"}</span>
                    <span>Status: {movieInfo?.status}</span>
                    <div className="production-countries-block">
                        <span>Production countries:</span>
                        <div className="production-countries-container">
                            {
                                movieInfo?.production_countries.map((country, index) =>
                                    (<Badge key={index} name={country.name}/>))
                            }
                        </div>
                    </div>

                    <PosterPreview imagePath={movieInfo?.poster_path || ""} imageAlt={movieInfo?.title || ""}/>
                </div>
            </div>
        </div>
    )
}

export default MoviePage;
