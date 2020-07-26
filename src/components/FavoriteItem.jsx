import React from "react";

function FavoriteItem(props) {
    const { name, price } = props.product;
    console.log(name, price);

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
}

export default FavoriteItem;
