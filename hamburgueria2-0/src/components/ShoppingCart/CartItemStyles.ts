import styled from "styled-components";

export const CartItemStyles = styled.div`
    height: 80px;

    .item {
        width: 60%;
        gap: 8px;

        img {
            background-color: var(--grey0);
            border-radius: var(--card-radius);
        }

        .count {
            margin: 0 auto;
        }

        h2 {
            font-size: var(--heading3);
            color: var(--grey6);
            font-weight: var(--bold);
            text-align: center;
        }

        p {
            font-size: var(--caption);
            border: 2px solid var(--grey0);
            padding: 10px 20px;
        }
        
        span {
            border: none;
            padding: 10px;
            background-color: var(--grey0);
            font-weight: var(--bold);
            font-size: var(--headline);
            cursor: pointer;
            color: #EB5757;
        }
    }

    .remove {
        width: 25x;
        height: 25px;
        cursor: pointer;
    }
`