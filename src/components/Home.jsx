import React from "react";
import { NavLink } from "react-router-dom";

function Home(props) {
    const { categories } = props;

    return (
        <div>
            <h2>Browse in Categories:</h2>
            {categories.map((categorie) => {
                return (
                    <NavLink key={categorie} to={`/${categorie}`}>
                        <h3>{categorie}</h3>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default Home;
