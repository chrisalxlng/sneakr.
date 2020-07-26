import React from "react";

function FavoriteItem(props) {
    const { product, onFavorite } = props;
    const { name, price } = product;
    console.log(name, price);

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => onFavorite(product)}>Remove Favorite</button>
        </div>
    );
}

export default FavoriteItem;
