import type {FC} from "react";
import "./production-company-card.css";
import {ProductionCompanyCardProps} from "@/src/models/movieModels/MovieInfo";

const ProductionCompanyCard: FC<ProductionCompanyCardProps> = ({company}) => {
    return (
        <div className="production-company-block">
            <div className="production-company-info">
                <h4>{company.name}</h4>
                <span>{company.origin_country}</span>
            </div>
        </div>
    );
};

export default ProductionCompanyCard;
