import React from "react";
import CategorieCard from "./CategoryCard";

function Categories(props) {
    const { categories, products } = props;

    const productRandomInt = Math.floor(
        Math.random() * Math.floor(products.length)
    );

    return (
        <div className="categories">
            <h1 className="text-styles text-styles--h1">Categories</h1>
            <div className="categories__grid">
                <CategorieCard
                    key={"products"}
                    category={"All Products"}
                    image={products[productRandomInt]["image-small"]}
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
                                        .map(
                                            (product) => product["image-small"]
                                        )[randomInt]
                                }
                                link={category.name}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default Categories;
