import React from "react";
import styled from "styled-components";

const Interface = styled.div``;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 10%;
    width: 800px;
    max-width: 80vw;
    max-height: 70vh;

    @media (max-width: 630px) {
        grid-template-columns: 100%;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;

    .price,
    .sale {
        font-size: 14px;
    }

    .sale-strike-through {
        font-size: 12px;
        text-decoration: line-through;
        margin-left: 5px;
    }
`;

const FlexEndContainer = styled(FlexContainer)`
    align-items: flex-end;
    margin: 30px 0;
`;

const AspectRatioContainer = styled.div`
    padding-top: 100%;
    position: relative;
`;

const ProductImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 10px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
    overflow: hidden;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
`;

const RectContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    height: 35px;
    width: fit-content;
    padding: 10px;
    margin-right: 20px;
`;

const Select = styled(RectContainer)`
    width: min-content;
    position: relative;
    overflow: hidden;

    select  {
        appearance: none;
        border: none;
        padding: 0px 20px 0px 0px;
        cursor: pointer;
    }

    img {
        position: absolute;
        right: 3px;
        top: 50%;
        transform: translateY(-50%);
        height: 25px;
        width: 25px;
        pointer-events: none;
    }
`;

const Button = styled(Container)`
    position: relative;
    height: 35px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 35px;

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

const PlusMinusButton = styled.button`
    position: relative;
    height: 100%;
    background-color: white;
    border: none;
    cursor: pointer;

    img {
        height: 15px;
        width: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Quantity = styled.p`
    width: 40px;
    text-align: center;
    font-size: 14px;
`;

const BlackButton = styled(Container)`
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    height: 40px;
    padding: 10px 30px;
    border-radius: 10px;
    font-weight: 600;
    margin-top: 10px;
`;

const Label = styled.p`
    margin-bottom: 5px;
`;

function BuyProductInterface(props) {
    const {
        product,
        favorites,
        image,
        currency,
        buyProductInterface,
        onFavorite,
        onIncrementProduct,
        onInterfaceIncrementQuantity,
        onInterfaceDecrementQuantity,
        onInterfaceSelectChange,
        onInterfaceReset,
    } = props;
    const { price, sale, sizes } = product;
    const { quantity, selectedValue } = buyProductInterface;

    return (
        <Interface>
            <GridContainer>
                <AspectRatioContainer>
                    <ProductImage>
                        <img src={"/img/" + image + ".jpg"} alt="Product" />
                    </ProductImage>
                </AspectRatioContainer>
                <div>
                    <div>
                        <Label>Price:</Label>
                        <RectContainer>
                            <FlexContainer>
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
                            </FlexContainer>
                        </RectContainer>
                    </div>
                    <FlexEndContainer>
                        <div>
                            <Label>Size:</Label>
                            <Select>
                                <select
                                    onChange={(event) =>
                                        onInterfaceSelectChange(
                                            event.target.value
                                        )
                                    }
                                    defaultValue={selectedValue}
                                >
                                    {sizes.map((item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                                <img src="/icons/down-arrow.svg" alt="" />
                            </Select>
                        </div>
                        <div>
                            <Label>Quantity:</Label>
                            <RectContainer>
                                <FlexContainer>
                                    <PlusMinusButton
                                        onClick={onInterfaceDecrementQuantity}
                                    >
                                        <img
                                            alt="Decrement Quantity"
                                            src="/icons/remove.svg"
                                        />
                                    </PlusMinusButton>
                                    <Quantity>{quantity}</Quantity>
                                    <PlusMinusButton
                                        onClick={onInterfaceIncrementQuantity}
                                    >
                                        <img
                                            alt="Increment Quantity"
                                            src="/icons/plus.svg"
                                        />
                                    </PlusMinusButton>
                                </FlexContainer>
                            </RectContainer>
                        </div>
                        <Button as="button" onClick={() => onFavorite(product)}>
                            {favorites
                                .map((item) => item.productID)
                                .includes(product.id) ? (
                                <img
                                    alt="Remove Favorite"
                                    src="/icons/heart-full.svg"
                                />
                            ) : (
                                <img
                                    alt="Add Favorite"
                                    src="/icons/heart.svg"
                                />
                            )}
                        </Button>
                    </FlexEndContainer>

                    <BlackButton
                        as="button"
                        onClick={() => {
                            onIncrementProduct(
                                product,
                                selectedValue,
                                quantity
                            );
                            onInterfaceReset();
                        }}
                    >
                        Add {quantity} {quantity > 1 ? "items" : "item"} to cart
                    </BlackButton>
                </div>
            </GridContainer>
        </Interface>
    );
}

export default BuyProductInterface;
