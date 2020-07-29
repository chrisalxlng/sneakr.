import React from "react";
import ProductCard from "./ProductCard";

function ProductCardContainer(props) {
    const { products, onIncrementProduct, onFavorite } = props;

    return (
        <div>
            {products.map((item) => {
                return (
                    <ProductCard
                        key={item.id}
                        product={item}
                        onIncrementProduct={onIncrementProduct}
                        onFavorite={onFavorite}
                    />
                );
            })}
        </div>
    );
}

export default ProductCardContainer;
