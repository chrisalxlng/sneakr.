import React from "react";
import ProductCardContainer from "./ProductCardContainer";

function Home(props) {
    const { products, onProductIncrement, onFavorite } = props;

    return (
        <div>
            <ProductCardContainer
                products={products}
                onProductIncrement={onProductIncrement}
                onFavorite={onFavorite}
            />
        </div>
    );
}

export default Home;
