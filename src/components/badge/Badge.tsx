import type {FC} from "react";
import "./badge.css";
import {BadgeComponentProps} from "@/src/models/movieModels/ComponentsProps";

const Badge: FC<BadgeComponentProps> = ({name}) => {
    return (
        <span className="custom-badge">{name}</span>
    );
};

export default Badge;
