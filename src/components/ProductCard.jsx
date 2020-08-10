import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    width: 230px;
    height: 300px;
    border-radius: 20px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
    overflow: hidden;
    position: relative;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
`;

const NamePriceContainer = styled(Container)`
    position: absolute;
    bottom: 5%;
    left: 5%;
    max-width: 55%;
    border-radius: 10px;
    padding: 0.5em 1em;

    p {
        margin: 1px 0;
    }

    .name {
        color: black;
        font-weight: 600;
    }

    .price {
        color: black;
        font-size: 12px;
    }

    .sale {
        color: black;
        display: inline-block;
        font-size: 12px;
    }

    .sale-strike-through {
        color: black;
        display: inline-block;
        margin-left: 5px;
        font-size: 12px;
        text-decoration: line-through;
    }
`;

const Button = styled(Container)`
    position: absolute;
    right: 5%;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: none;
    cursor: pointer;

    img {
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    :hover {
        background-color: rgba(255, 255, 255, 1);
    }
`;

const FavoriteButton = styled(Button)`
    top: 5%;
`;

const BuyButton = styled(Button)`
    bottom: 5%;
`;

function ProductCard(props) {
    const { product, favorites, currency, onTogglePopup, onFavorite } = props;
    const { id, name, price, sale } = product;
    const image = product["image-small"];

    return (
        <React.Fragment>
            <Card>
                <Link to={`/product=${id}`}>
                    <Image src={"/img/" + image + ".jpg"} alt="Product" />
                    <NamePriceContainer>
                        <p className="name">{name}</p>
                        {sale ? (
                            <p className="sale">{sale + currency}</p>
                        ) : null}
                        {sale ? (
                            <p className="sale-strike-through">
                                {price + currency}
                            </p>
                        ) : (
                            <p className="price">{price + currency}</p>
                        )}
                    </NamePriceContainer>
                </Link>
                <BuyButton as="button" onClick={() => onTogglePopup(product)}>
                    <img alt="Buy" src="/icons/cart.svg" />
                </BuyButton>
                <FavoriteButton as="button" onClick={() => onFavorite(product)}>
                    {favorites
                        .map((item) => item.productID)
                        .includes(product.id) ? (
                        <img
                            alt="Remove Favorite"
                            src="/icons/heart-full.svg"
                        />
                    ) : (
                        <img alt="Add Favorite" src="/icons/heart.svg" />
                    )}
                </FavoriteButton>
            </Card>
        </React.Fragment>
    );
}

export default ProductCard;
