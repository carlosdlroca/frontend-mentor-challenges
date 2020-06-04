import styled from "styled-components";

const Flex = styled.section`
    display: flex;
    justify-content: ${(props) =>
        props.justifyContent ? props.justifyContent : "flex-start"};
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
`;

export const FlexColumn = styled(Flex)`
    flex-direction: column;

    & > * {
        margin-bottom: ${(props) => (props.margin ? props.margin : "0")};
    }
`;

export const FlexRow = styled(Flex)`
    flex-direction: row;
    flex-flow: row wrap;
    & > * {
        ${(props) => {
            if (props.itemsPerRow) {
                let flexAmount = (1 / props.itemsPerRow) * 100;
                // Either shrink by providing a number less than 1, or grow by providing a number greater than 1
                flexAmount *= props.adjustFlexSize ? props.adjustFlexSize : 1;
                return `flex: 0 0 ${flexAmount}%`;
            }
        }}
`;

export const FlexCenter = styled(Flex)`
    justify-content: center;
    align-items: center;
`;
