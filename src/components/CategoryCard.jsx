import React from "react";
import { Link } from "react-router-dom";

function CategorieCard(props) {
    const { category, image, link } = props;

    return (
        <Link to={`/${link}`}>
            <div>
                <img src={"/img/" + image + ".jp"} alt={category + " image"} />
                <div />
                <p>{category}</p>
            </div>
        </Link>
    );
}

export default CategorieCard;
