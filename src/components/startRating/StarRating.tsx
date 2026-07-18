'use client';

import type {FC} from "react";
import {Rating} from "@mui/material";
import {StarRatingComponentProps} from "@/src/models/movieModels/ComponentsProps";
import "./star-rating.css"

const CustomStarRatingComponent: FC<StarRatingComponentProps> = ({ rate }) => {
    return (
        <div className="star-rate-block">
            {rate ? (
                <Rating
                    value={rate}
                    precision={0.1}
                    readOnly
                    size="small"
                />
            ) : (
                <span className="no-rate">No rating</span>
            )}
        </div>
    );
};

export default CustomStarRatingComponent;
