import styled from "styled-components";

export const DefaultGreenButtons = styled.button`
    font-family: var(--family);
    color: var(--white);
    background-color: var(--primary);
    padding: 20px;
    border-radius: var(--radius);
    font-size: var(--headline);
    font-weight: var(--semibold);
    border: none;
    cursor: pointer;

    :hover {
        background-color: var(--primary50);
    }
`

export const MediumGreenButtons = styled(DefaultGreenButtons)`
    padding: 10px 20px;
`

export const DefaultGreyButtons = styled(DefaultGreenButtons)`
    background-color: var(--grey1);
    color: var(--grey3);

    :hover{
        background-color: var(--grey3);
        color: var(--grey1);
    }
`

export const MediumGreyButtons = styled(DefaultGreyButtons)`
    padding: 10px 20px;
`