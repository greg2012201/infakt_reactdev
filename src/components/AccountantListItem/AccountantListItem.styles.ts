import { styled } from "styled-components";

export const Wrapper = styled.li`
    width: 300px;
    height: 376px;
    border: 1px solid;
    border-color: ${({ theme }) => `${theme.colors.grey[200]}`};
    border-radius: 16px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
`;
