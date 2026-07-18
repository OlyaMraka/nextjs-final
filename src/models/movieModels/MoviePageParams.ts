import {SearchParams} from "next/dist/server/request/search-params";

export type MoviesPageProps = {
    searchParams: Promise<SearchParams>;
}

export type MoviePageParams = {
    params: Promise<{ id: number }>
}