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
                        onIncrement={props.onIncrement}
                    />
                );
            })}
        </div>
    );
}

export default ProductCardContainer;
