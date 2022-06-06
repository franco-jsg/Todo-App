import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.color1};
    color: ${({theme}) => theme.colors.color4};
    width: 100%;
    padding: 20px 5%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    /* a:visited {
        text-decoration: none;
    } */

`

export const StyledNav = styled.nav`
    display: flex;

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        align-items: center;
        justify-content: center;
        gap: 15px
    }

    li {

    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;

    /* a:visited {
        text-decoration: none;
    } */
`

export const StyledNavLink = styled(NavLink) `
    text-decoration: none;
`