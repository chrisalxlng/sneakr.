import React from "react";
import { Link } from "react-router-dom";
import CategorieCard from "./CategoryCard";

function Categories(props) {
    const { categories, products } = props;

    return (
        <div>
            <h2>Categories:</h2>

            <Link key="All Products" to="/products">
                <h3>All Products</h3>
            </Link>
            <CategorieCard
                key={"products"}
                category={"All Products"}
                image={products[0]["image-small"]}
                link={"products"}
            />
            {categories.map((category) => {
                if (category.name !== null) {
                    const randomInt = Math.floor(
                        Math.random() * Math.floor(category.productCount)
                    );

                    return (
                        <CategorieCard
                            key={category.name}
                            category={category.name}
                            image={
                                products
                                    .filter((product) =>
                                        product.categories.includes(
                                            category.name
                                        )
                                    )
                                    .map((product) => product["image-small"])[
                                    randomInt
                                ]
                            }
                            link={category.name}
                        />
                    );
                }
                return null;
            })}
        </div>
    );
}

export default Categories;
