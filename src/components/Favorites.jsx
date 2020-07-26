import React from "react";
import FavoriteItem from "./FavoriteItem";

function Favorites(props) {
    const { favoriteItems } = props;

    return (
        <div>
            <h2>Favorites</h2>
            {favoriteItems.map((item) => {
                return <FavoriteItem key={item.id} favoriteItem={item} />;
            })}
        </div>
    );
}

export default Favorites;
