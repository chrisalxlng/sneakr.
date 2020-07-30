import React from "react";
import { Link } from "react-router-dom";

function FavoriteItem(props) {
    const { product, currency, onFavorite } = props;
    const { id, name, price, sale } = product;

    return (
        <div>
            <Link to={`/product=${id}`}>
                <p>{name}</p>
                {sale ? (
                    <p className="sale-strike-through">{price + currency}</p>
                ) : (
                    <p>{price + currency}</p>
                )}
                {sale ? <p className="sale">{sale + currency}</p> : null}
            </Link>
            <button onClick={() => onFavorite(product)}>Remove Favorite</button>
        </div>
    );
}

export default FavoriteItem;
