import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
    const { product, currency, onOpenPopup, onFavorite } = props;
    const { id, name, price } = product;

    return (
        <div>
            <Link to={`/product=${id}`}>
                <p>{name}</p>
                <p>{price + currency}</p>
            </Link>
            <button onClick={() => onOpenPopup(product)}>Buy</button>
            <button onClick={() => onFavorite(product)}>Favorite</button>
        </div>
    );
}

export default ProductCard;
