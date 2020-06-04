import styled from "styled-components";

const Button = styled.button`
    background-color: ${(props) =>
        props.backgroundColor ? props.backgroundColor : "var(--color-main)"};
    color: ${(props) => (props.textColor ? props.textColor : "#FFF")};
    border-radius: ${(props) => {
        if (props.borderRadius) {
            return props.borderRadius;
        } else {
            return ".2rem";
        }
    }};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    font-size: ${(props) => (props.fontSize ? props.fontSize : "2rem")};
    padding: ${(props) => (props.padding ? props.padding : "")};
    transition: all 0.2s ease;

    &:hover,
    &:focus {
        transform: translate(-0.3rem, -0.4rem);
        box-shadow: 0.3rem 0.4rem 1rem rgba(0, 0, 0, 0.5);
    }

    &:active {
        transform: translate(-0.2rem, -0.1rem);
        box-shadow: 0.2rem 0.1rem 1rem rgba(0, 0, 0, 0.6);
    }
`;
export default Button;
export const PillButton = styled(Button)`
    border-radius: 20rem;
`;

export const RoundedButton = styled(Button)`
    border-radius: 1rem;
`;
