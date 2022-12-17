import styled from "styled-components";

export const FormStyle = styled.div`
    border: 2px solid var(--grey0);
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    padding: 25px;
    gap: 25px;

    h1 {
        font-size: var(--heading3);
        font-weight: var(--bold);
        color: var(--grey6);
    }

    p {
        text-align: center;
        font-size: var(--body);
        font-weight: var(--regular);
        color: var(--grey5);
    }

    a {
        font-family: var(--family);
        color: var(--grey3);
        background-color: var(--grey1);
        padding: 20px;
        border-radius: var(--radius);
        font-size: var(--headline);
        font-weight: var(--semibold);
        border: none;
        cursor: pointer;
        text-decoration: none;
        text-align: center;

        :hover {
            background-color: var(--grey3);
            color: var(--grey1);
        }
    }

    .register-header > a {
        padding: 10px 20px;
    }
`