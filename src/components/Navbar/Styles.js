import styled from "styled-components";

export const Navbar = styled.nav`
    background-color: var(--color-main);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 2.5rem 5rem;

    @media only screen and (max-width: 1024px) {
        justify-content: center;
    }
`;

export const NavbarLinks = styled.ul`
    display: flex;
    align-items: center;
`;

export const NavbarLink = styled.li`
    a {
        border-radius: 0.4rem;
        color: #fff;
        font-size: 2.5rem;
        padding: 1rem 2rem;
        transition: background-color 0.2s ease;
        &:hover,
        &:focus {
            background-color: var(--color-sub);
        }
    }

    &:not(:last-child) {
        margin-right: 2rem;
    }
`;
