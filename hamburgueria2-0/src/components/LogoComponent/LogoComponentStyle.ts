import styled from "styled-components";

export const LogoDivStyle = styled.div`
    gap: 30px;

    .logo{
        width: 50%;
    }

    .headline-box {
        gap: 10px;
        border-radius: var(--card-radius);
        border: 1px solid #e0e0e0;
        padding: 17px 14px;
        box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    }

    .big-icon {
        height: 60px;
        width: 60px;
        border-radius: 5px;
        background-color: rgba(39, 174, 96, 0.1);
    }

    p {
        font-size: var(--body);
        color: var(--grey3);
        font-weight: var(--regular);
        line-height: 22px;
    }

    .dots {
        width: 40%;
    }
`