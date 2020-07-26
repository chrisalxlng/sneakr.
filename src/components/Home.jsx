import React from "react";
import ProductCardContainer from "./ProductCardContainer";

function Home(props) {
    const { products, onIncrementProduct, onFavorite } = props;

    return (
        <div>
            <ProductCardContainer
                products={products}
                onIncrementProduct={onIncrementProduct}
                onFavorite={onFavorite}
            />
        </div>
    );
}

export default Home;
