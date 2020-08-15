import React from "react";

function BuyProductInterface(props) {
    const {
        product,
        favorites,
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
    const { price, sale, sizes } = product;
    const { quantity, selectedValue } = buyProductInterface;

    return (
        <div className="buy-interface">
            <div className="buy-interface__image">
                <div>
                    <img src={"/img/" + image + ".jpg"} alt="Product" />
                </div>
            </div>
            <div>
                <div>
                    <p className="buy-interface__label">Price:</p>
                    <div className="btn btn--container">
                        {sale ? (
                            <p className="buy-interface__price--sale">
                                {sale + currency}
                            </p>
                        ) : null}
                        {sale ? (
                            <p className="buy-interface__price--strike-through">
                                {price + currency}
                            </p>
                        ) : (
                            <p className="buy-interface__price">
                                {price + currency}
                            </p>
                        )}
                    </div>
                </div>
                <div className="buy-interface__container">
                    <div>
                        <p className="buy-interface__label">Size:</p>
                        <div className="btn btn--select">
                            <select
                                onChange={(event) =>
                                    onInterfaceSelectChange(event.target.value)
                                }
                                defaultValue={selectedValue}
                            >
                                {sizes.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                            <img src="/icons/down-arrow.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="buy-interface__label">Quantity:</p>
                        <div className="btn btn--plus-minus">
                            <div>
                                <button onClick={onInterfaceDecrementQuantity}>
                                    <img
                                        alt="Decrement Quantity"
                                        src="/icons/remove.svg"
                                    />
                                </button>
                                <p>{quantity}</p>
                                <button onClick={onInterfaceIncrementQuantity}>
                                    <img
                                        alt="Increment Quantity"
                                        src="/icons/plus.svg"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn btn--circular"
                        onClick={() => onFavorite(product)}
                    >
                        {favorites
                            .map((item) => item.productID)
                            .includes(product.id) ? (
                            <img
                                alt="Remove Favorite"
                                src="/icons/heart-full.svg"
                            />
                        ) : (
                            <img alt="Add Favorite" src="/icons/heart.svg" />
                        )}
                    </button>
                </div>

                <button
                    className="btn btn--primary"
                    onClick={() => {
                        onIncrementProduct(product, selectedValue, quantity);
                        onInterfaceReset();
                    }}
                >
                    Add {quantity} {quantity > 1 ? "items" : "item"} to cart
                </button>
            </div>
        </div>
    );
}

export default BuyProductInterface;
