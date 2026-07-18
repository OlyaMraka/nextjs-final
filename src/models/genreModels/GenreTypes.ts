export type Genre = {
    id: number;
    name: string;
}

export type GenreDataResponse = {
    genres: Genre[]
}

export type GenreTagType = {
    genre: Genre;
}

export type GenreBadgeComponentProps = {
    genreName: string;
}

export type GenreDropdownProps = {
    genres: Genre[];
}
