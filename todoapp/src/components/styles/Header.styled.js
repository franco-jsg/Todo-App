import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.color1};
    width: 100%;
    padding: 20px 5%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;



`

export const StyledNav = styled.nav`
    display: flex;

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        align-items: center;
        justify-content: center;
        gap: 12px
    }
`

export const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.color6};

`

export const StyledNavLink = styled(NavLink) `
    text-decoration: none;
    color: ${({theme}) => theme.colors.color6};
`

export const StyledSignOutButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px 5px;

    background-color: ${({theme}) => theme.colors.color6};
    color: ${({theme}) => theme.colors.color3};
    cursor: pointer;
`