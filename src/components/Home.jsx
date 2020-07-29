import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
    const { categories } = props;

    return (
        <div>
            <h2>Browse in Categories:</h2>
            {categories.map((categorie) => {
                return (
                    <Link key={categorie} to={`/${categorie}`}>
                        <h3>{categorie}</h3>
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
