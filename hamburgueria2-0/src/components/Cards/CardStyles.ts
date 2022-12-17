import styled from "styled-components";

export const CardStyle = styled.li`
    border: 2px solid var(--grey1);
    width: 20%;

    figure {
        width: 100%;
        height: 60%;
        background-color: var(--grey0);
        overflow: hidden;

        img {
            background-color: var(--grey0);
            width: 100%;
        }
    }

    section {
        padding: 20px;
        gap: 10px;
        height: 40%;
    }

    h2 {
        font-size: var(--heading3);
        font-weight: var(--bold);
        color: var(--grey6);
    }

    .caption {
        color: var(--grey3);
        font-weight: var(--regular);
        font-size: var(--caption);
    }

    .body {
        color: var(--primary);
        font-weight: var(--semibold);
        font-size: var(--body);
    }

    :hover {
        border-color: var(--primary);

        button {
            background-color: var(--primary);
            color: var(--white);

            :hover{
                background-color: var(--primary50);
            }
        }
    }
`