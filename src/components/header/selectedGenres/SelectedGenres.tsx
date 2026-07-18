'use client';

import { FC } from "react";
import { useSearchParams } from "next/navigation";
import GenreTag from "@/src/components/header/genreTag/GenreTag";
import {Genre} from "@/src/models/genreModels/GenreTypes";
import "./selected-genres.css";

interface Props {
    genres: Genre[];
}

const SelectedGenres: FC<Props> = ({ genres }) => {
    const searchParams = useSearchParams();

    const genresInQuery =
        searchParams.get("genres")?.split("|") ?? [];

    const selectedGenres = genres.filter(
        genre => genresInQuery.includes(genre.id.toString())
    );

    return (
        <>
            {selectedGenres.map((genre) => (
                <GenreTag
                    key={genre.id}
                    genre={genre}
                />
            ))}
        </>
    );
};

export default SelectedGenres;
