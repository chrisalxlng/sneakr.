import React from "react";
import ProductCardContainer from "./ProductCardContainer";

function Home(props) {
    const { products, onBuy, onFavorite } = props;

    return (
        <div>
            <ProductCardContainer
                products={products}
                onBuy={onBuy}
                onFavorite={onFavorite}
            />
        </div>
    );
}

export default Home;
