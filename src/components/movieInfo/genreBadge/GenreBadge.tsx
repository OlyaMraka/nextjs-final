import type {FC} from "react";
import "./genre-badge.css";
import {GenreBadgeComponentProps} from "@/src/models/genreModels/GenreTypes";

const GenreBadge: FC<GenreBadgeComponentProps> = ({genreName}) => {
    return (
        <span className="genre-badge">{genreName}</span>
    );
};

export default GenreBadge;
