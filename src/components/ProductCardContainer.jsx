import React from "react";
import ProductCard from "./ProductCard";

function ProductCardContainer(props) {
    const { products, onBuy, onFavorite } = props;

    return (
        <div>
            <h2>Shop our products!</h2>
            {products.map((item) => {
                return (
                    <ProductCard
                        key={item.id}
                        product={item}
                        onBuy={onBuy}
                        onFavorite={onFavorite}
                    />
                );
            })}
        </div>
    );
}

export default ProductCardContainer;
