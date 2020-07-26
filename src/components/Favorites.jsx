import React from "react";
import FavoriteItem from "./FavoriteItem";

function Favorites(props) {
    const { products, favorites } = props;

    return (
        <div>
            <h2>Favorites</h2>
            {favorites.map((item) => {
                return (
                    <FavoriteItem
                        key={item.favoriteID}
                        product={
                            products.filter((i) => i.id === item.productID)[0]
                        }
                        favoriteItem={item}
                    />
                );
            })}
        </div>
    );
}

export default Favorites;
