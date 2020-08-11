import React from "react";

function BuyProductInterface(props) {
    const {
        product,
        image,
        currency,
        buyProductInterface,
        onFavorite,
        onIncrementProduct,
        onInterfaceIncrementQuantity,
        onInterfaceDecrementQuantity,
        onInterfaceSelectChange,
        onInterfaceReset,
    } = props;
    const { name, price, sale, sizes } = product;
    const { quantity, selectedValue } = buyProductInterface;

    return (
        <div>
            <img src={"/img/" + image + ".jp"} alt="Product" />
            <p>{name}</p>
            {sale ? (
                <p className="sale-strike-through">{price + currency}</p>
            ) : (
                <p>{price + currency}</p>
            )}
            {sale ? <p className="sale">{sale + currency}</p> : null}
            <label htmlFor="sizes-select">Select a size:</label>
            <select
                onChange={(event) =>
                    onInterfaceSelectChange(event.target.value)
                }
                name="sizes"
                id="sizes-select"
                defaultValue={selectedValue}
            >
                {sizes.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            <p>Quantity: {quantity}</p>
            <button onClick={onInterfaceIncrementQuantity}>+</button>
            <button onClick={onInterfaceDecrementQuantity}>-</button>
            <button
                onClick={() => {
                    onIncrementProduct(product, selectedValue, quantity);
                    onInterfaceReset();
                }}
            >
                Add to cart
            </button>
            <button onClick={() => onFavorite(product)}>Favorite</button>
        </div>
    );
}

export default BuyProductInterface;
