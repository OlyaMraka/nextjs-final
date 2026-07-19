import { FC } from "react";
import "./header-component.css";
import GenreDropdown from "@/src/components/header/genreDropdown/GenreDropdawn";
import SearchBar from "@/src/components/header/searchBar/Searchbar";
import SelectedGenres from "@/src/components/header/selectedGenres/SelectedGenres";
import {HeaderComponentProps} from "@/src/models/movieModels/ComponentsProps";

const HeaderComponent: FC<HeaderComponentProps> = async ({genres}) => {
    return (
        <div className="header-block">
            <div className="header-left-content">
                <GenreDropdown genres={genres} />
                <SearchBar />
            </div>

            <div className="selected-genres-block">
                <SelectedGenres genres={genres} />
            </div>
        </div>
    );
};

export default HeaderComponent;
