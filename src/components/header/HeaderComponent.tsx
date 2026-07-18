import { FC } from "react";
import "./header-component.css";
import { getGenres } from "@/src/services/api.service";
import GenreDropdown from "@/src/components/header/genreDropdown/GenreDropdawn";
import SearchBar from "@/src/components/header/searchBar/Searchbar";
import SelectedGenres from "@/src/components/header/selectedGenres/SelectedGenres";

const HeaderComponent: FC = async () => {
    const genres = await getGenres();

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
