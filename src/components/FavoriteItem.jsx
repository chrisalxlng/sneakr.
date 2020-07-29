import React from "react";
import { Link } from "react-router-dom";

function FavoriteItem(props) {
    const { product, onFavorite } = props;
    const { id, name, price } = product;

    return (
        <div>
            <Link to={`/product=${id}`}>
                <p>{name}</p>
                <p>{price}</p>
            </Link>
            <button onClick={() => onFavorite(product)}>Remove Favorite</button>
        </div>
    );
}

export default FavoriteItem;
