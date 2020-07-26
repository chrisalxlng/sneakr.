import React from "react";
import ProductCard from "./ProductCard";

function ProductCardContainer(props) {
    const { products, onProductIncrement, onFavorite } = props;

    return (
        <div>
            <h2>Shop our products!</h2>
            {products.map((item) => {
                return (
                    <ProductCard
                        key={item.id}
                        product={item}
                        onProductIncrement={onProductIncrement}
                        onFavorite={onFavorite}
                    />
                );
            })}
        </div>
    );
}

export default ProductCardContainer;
