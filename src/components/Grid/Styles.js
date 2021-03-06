import styled from "styled-components";

export default styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
    grid-gap: 2rem;
    width: 80%;
    margin: 4rem auto;

    @media only screen and (max-width: 1380px) {
        width: 97%;
    }
`;
