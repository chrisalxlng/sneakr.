import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
    const { product, currency, onOpenPopup, onFavorite } = props;
    const { id, name, price, sale } = product;
    const image = product["image-small"];

    return (
        <div>
            <Link to={`/product=${id}`}>
                <img src={"/img/" + image + ".jpg"} alt="Product" />
                <p>{name}</p>
                {sale ? (
                    <p className="sale-strike-through">{price + currency}</p>
                ) : (
                    <p>{price + currency}</p>
                )}
                {sale ? <p className="sale">{sale + currency}</p> : null}
            </Link>
            <button onClick={() => onOpenPopup(product)}>Buy</button>
            <button onClick={() => onFavorite(product)}>Favorite</button>
        </div>
    );
}

export default ProductCard;
