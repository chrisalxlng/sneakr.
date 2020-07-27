import React from "react";
import { NavLink } from "react-router-dom";

function FavoriteItem(props) {
    const { product, onFavorite } = props;
    const { id, name, price } = product;

    return (
        <div>
            <NavLink to={`/product=${id}`}>
                <p>{name}</p>
                <p>{price}</p>
            </NavLink>
            <button onClick={() => onFavorite(product)}>Remove Favorite</button>
        </div>
    );
}

export default FavoriteItem;
