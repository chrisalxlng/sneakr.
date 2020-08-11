import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const LinkContainer = styled(Container)`
    > * {
        margin: 0 10px;
    }
`;

const CartContainer = styled(Container)`
    position: relative;
`;

const Nav = styled(Container)`
    position: fixed;
    z-index: 100;
    background-color: white;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    padding: 0 30px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
`;

const Link = styled.span`
    color: black;
    font-size: 12px;
`;

const Logo = styled.span`
    color: black;
    font-weight: 600;
    font-size: 18px;

    .red-dot {
        color: red;
    }
`;

const Icon = styled.img`
    height: 20px;
    width: 20px;
`;

const CartItemsIndicator = styled.div`
    position: absolute;
    top: -7px;
    right: -17px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 10px;
        color: white;
        line-height: 0;
    }
`;

function Navbar(props) {
    return (
        <Nav>
            <GlobalStyle />
            <LinkContainer>
                <NavLink to="/">
                    <Logo>
                        sneakr<span className="red-dot">.</span>
                    </Logo>
                </NavLink>
                <NavLink to="/">
                    <Link>Home</Link>
                </NavLink>
                <NavLink to="/Sale">
                    <Link>Sale</Link>
                </NavLink>
                <NavLink to="/">
                    <Link>Categories</Link>
                </NavLink>
            </LinkContainer>

            <LinkContainer>
                <NavLink to="favorites">
                    <Icon src="/icons/heart.svg" alt="Favorites" />
                </NavLink>

                <NavLink to="cart">
                    <CartContainer>
                        <Icon src="/icons/cart.svg" alt="Cart" />
                        <CartItemsIndicator>
                            <p>
                                {props.cartItemsCount < 100
                                    ? props.cartItemsCount
                                    : 99}
                            </p>
                        </CartItemsIndicator>
                    </CartContainer>
                </NavLink>
            </LinkContainer>
        </Nav>
    );
}

export default Navbar;
