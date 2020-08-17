import React from "react";
import BuyProductInterface from "./BuyProductInterface";
import ProductCardScrollContainer from "./ProductCardScrollContainer";
import OnBuyPopup from "./OnBuyPopup";

function ProductPage(props) {
    const {
        product,
        favorites,
        products,
        currency,
        buyProductInterface,
        popupOnBuyProduct,
        onFavorite,
        onIncrementProduct,
        onInterfaceIncrementQuantity,
        onInterfaceDecrementQuantity,
        onInterfaceReset,
        onInterfaceSelectChange,
        onTogglePopup,
    } = props;
    const { description, materials, cleaning, categories } = product;

    // Prevent scrolling of app if popup is open
    if (popupOnBuyProduct.showPopup) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <div>
                <BuyProductInterface
                    product={product}
                    favorites={favorites}
                    image={product["image-large"]}
                    currency={currency}
                    buyProductInterface={buyProductInterface}
                    onFavorite={onFavorite}
                    onIncrementProduct={onIncrementProduct}
                    onInterfaceIncrementQuantity={onInterfaceIncrementQuantity}
                    onInterfaceDecrementQuantity={onInterfaceDecrementQuantity}
                    onInterfaceReset={onInterfaceReset}
                    onInterfaceSelectChange={onInterfaceSelectChange}
                />
            </div>
            <div className="product-info">
                <h2>More information</h2>
                <div className="product-info__grid">
                    <div className="product-info__element">
                        <h3>Description:</h3>
                        <ul>
                            {description.map((item) => {
                                return (
                                    <li key={description.indexOf(item)}>
                                        - {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="product-info__element">
                        <h3>Materials:</h3>
                        <p>{materials}</p>
                    </div>
                    <div className="product-info__element">
                        <h3>How to clean:</h3>
                        <p>{cleaning}</p>
                    </div>
                </div>
            </div>
            <ProductCardScrollContainer
                categorie={categories[0]}
                products={products.filter((p) => p !== product)}
                favorites={favorites}
                currency={currency}
                onTogglePopup={onTogglePopup}
                onFavorite={onFavorite}
            />
            {popupOnBuyProduct.showPopup ? (
                <OnBuyPopup
                    product={popupOnBuyProduct.product}
                    favorites={favorites}
                    currency={currency}
                    buyProductInterface={buyProductInterface}
                    onFavorite={onFavorite}
                    onIncrementProduct={onIncrementProduct}
                    onTogglePopup={onTogglePopup}
                    onInterfaceIncrementQuantity={onInterfaceIncrementQuantity}
                    onInterfaceDecrementQuantity={onInterfaceDecrementQuantity}
                    onInterfaceReset={onInterfaceReset}
                    onInterfaceSelectChange={onInterfaceSelectChange}
                />
            ) : null}
        </div>
    );
}

export default ProductPage;
