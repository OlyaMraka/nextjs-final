import type {FC} from "react";
import defaultPoster from "@/src/assets/no-img-placeholder.jpg";
import Image from "next/image";
import {PosterPreviewComponentProps} from "@/src/models/movieModels/ComponentsProps";

const PosterPreview: FC<PosterPreviewComponentProps> = ({imagePath, imageAlt}) => {
    const POSTER_BASE_URL = process.env.NEXTJS_POSTER_BASE_URL;

    return (
        <Image src={imagePath ? `${POSTER_BASE_URL}${imagePath}` : defaultPoster} alt={imageAlt} width={350}
               height={450}/>
    );
};

export default PosterPreview;
