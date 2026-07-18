'use client';

import {type FC, useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import "./genre-dropdown.css";
import {GenreDropdownProps} from "@/src/models/genreModels/GenreTypes";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const GenreDropdown: FC<GenreDropdownProps> = ({genres}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const onGenreClick = (genreId: number) => {
        const params = new URLSearchParams(searchParams.toString());

        const currentGenres = params.get("genres");

        if (currentGenres) {
            const genresArray = currentGenres.split("|");

            if (!genresArray.includes(genreId.toString())) {
                genresArray.push(genreId.toString());
            }

            params.set("genres", genresArray.join("|"));
        } else {
            params.set("genres", genreId.toString());
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    const selectedGenres =
        searchParams.get("genres")?.split("|") ?? [];

    const availableGenres = genres.filter(
        genre => !selectedGenres.includes(genre.id.toString())
    );

    return (
        <div className="dropdawn-block">
            <Dropdown className="genre-dropdown" isOpen={dropdownOpen} toggle={toggle} direction={"up"}>
                <DropdownToggle className="dropdown-top" caret>Genre</DropdownToggle>
                <DropdownMenu className="dropdown-menu">
                    {
                        availableGenres.map(genre => <DropdownItem onClick={() => {onGenreClick(genre.id)}}
                                                          key={genre.id}>{genre.name}</DropdownItem>)
                    }
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default GenreDropdown;
