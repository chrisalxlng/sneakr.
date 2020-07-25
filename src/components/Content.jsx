import React from "react";
import CardContainer from "./ProductCardContainer";

function Content(props) {
    const { products, onBuy, onFavorite } = props;

    return (
        <div>
            <CardContainer
                products={products}
                onBuy={onBuy}
                onFavorite={onFavorite}
            />
        </div>
    );
}

export default Content;
