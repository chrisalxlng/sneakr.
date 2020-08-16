import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
    const { categories, products } = props;

    return (
        <div>
            <h2>Browse in Categories:</h2>
            {categories.map((item) => {
                return (
                    <Link key={item.categorie} to={`/${item.categorie}`}>
                        <h3>
                            {item.categorie} ({item.productCount})
                        </h3>
                    </Link>
                );
            })}
            <Link key="All Products" to="/products">
                <h3>All Products</h3>
            </Link>
        </div>
    );
}

export default Home;
