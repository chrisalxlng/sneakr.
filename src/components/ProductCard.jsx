import React from "react";
import { NavLink } from "react-router-dom";

function ProductCard(props) {
    const { product, onIncrementProduct, onFavorite } = props;
    const { id, name, price } = product;

    return (
        <div>
            <NavLink to={`/product=${id}`}>
                <p>{name}</p>
                <p>{price}</p>
            </NavLink>
            <button onClick={() => onIncrementProduct(product)}>Buy</button>
            <button onClick={() => onFavorite(product)}>Favorite</button>
        </div>
    );
}

export default ProductCard;
