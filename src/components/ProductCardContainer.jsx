import React from "react";
import ProductCard from "./ProductCard";

function ProductCardContainer(props) {
    const { products, onOpenPopup, onFavorite } = props;

    return (
        <div>
            {products.map((item) => {
                return (
                    <ProductCard
                        key={item.id}
                        product={item}
                        onOpenPopup={onOpenPopup}
                        onFavorite={onFavorite}
                    />
                );
            })}
        </div>
    );
}

export default ProductCardContainer;
