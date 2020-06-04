import styled from "styled-components";
import { FlexCenter } from "../Flex";

export default styled(FlexCenter)`
    padding: 1rem;
    border: 1px solid white;
    border-radius: 50%;
    transition: all 0.2s ease;
    svg {
        height: 2rem;
        width: 2rem;
        transition: all 0.2s ease;
        fill: white;
    }

    &:hover {
        border-color: var(--color-sub);
        color: var(--color-sub);
        cursor: pointer;
        svg {
            fill: var(--color-sub);
        }
    }

    &:not(:last-child) {
        margin-right: 1rem;
    }
`;
