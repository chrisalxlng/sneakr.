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
            <h1 className="text-styles text-styles--h1">
                Browse in Categories
            </h1>

            {categories.map((category, index) => {
                if (category.name !== null && index < 5) {
                    return (
                        <div key={index} className="home__scroll-container">
                            <ProductCardScrollContainer
                                category={category.name}
                                label={category.name}
                                products={products}
                                favorites={favorites}
                                currency={currency}
                                onTogglePopup={onTogglePopup}
                                onFavorite={onFavorite}
                            />
                        </div>
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
                    popupOnBuyProduct={popupOnBuyProduct}
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
