import React from "react";
import { Link } from "react-router-dom";
import ProductCardScrollContainer from "./ProductCardScrollContainer";
import OnBuyPopup from "./OnBuyPopup";

function Home(props) {
    const {
        categories,
        products,
        favorites,
        currency,
        popupOnBuyProduct,
        buyProductInterface,
        onTogglePopup,
        onFavorite,
        onIncrementProduct,
        onInterfaceIncrementQuantity,
        onInterfaceDecrementQuantity,
        onInterfaceReset,
        onInterfaceSelectChange,
    } = props;

    // Prevent scrolling of app if popup is open
    if (popupOnBuyProduct.showPopup) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <div>
            <h2>Browse in Categories:</h2>
            {categories.map((categorie, index) => {
                if (categorie.name !== null && index < 3) {
                    return (
                        <ProductCardScrollContainer
                            key={index}
                            categorie={categorie}
                            products={products}
                            favorites={favorites}
                            currency={currency}
                            onTogglePopup={onTogglePopup}
                            onFavorite={onFavorite}
                        />
                    );
                }
                return null;
            })}
            <Link key="All Products" to="/products">
                <h3>All Products</h3>
            </Link>
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

export default Home;
