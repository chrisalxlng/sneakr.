import React from "react";
import ProductCard from "./ProductCard";

function ProductCardContainer(props) {
    return (
        <div>
            <h1>Shop our products!</h1>
            {props.products.map((item) => {
                return (
                    <ProductCard
                        key={item.id}
                        product={item}
                        onBuy={props.onBuy}
                        onFavorite={props.onFavorite}
                    />
                );
            })}
        </div>
    );
}

export default ProductCardContainer;
