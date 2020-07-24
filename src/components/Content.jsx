import React from "react";
import CardContainer from "./ProductCardContainer";

function Content(props) {
    const { products, onIncrement } = props;

    return (
        <div>
            <CardContainer products={products} onIncrement={onIncrement} />
        </div>
    );
}

export default Content;
