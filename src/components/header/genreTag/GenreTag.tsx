'use client';

import type {FC} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import "./genre-tag.css";
import {GenreTagType} from "@/src/models/genreModels/GenreTypes";

const GenreTag: FC<GenreTagType> = ({genre}) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const removeGenre = (genreId: number) => {
        const params = new URLSearchParams(searchParams.toString());

        const genres = params.get("genres");

        if (!genres) return;

        const updatedGenres = genres
            .split("|")
            .filter(id => +id !== genreId);

        if (updatedGenres.length === 0) {
            params.delete("genres");
        } else {
            params.set("genres", updatedGenres.join("|"));
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="tag-block">
            <span>{genre.name}</span>
            <button onClick={() => {removeGenre(genre.id)}}>&times;</button>
        </div>
    );
};

export default GenreTag;
