import styled from "styled-components";

export const DialogStyle = styled.dialog`
    background-color: var(--backdrop);
    padding: 0;
    margin: 0;
    border: none;
    width: 100%;
    height: 100%;
    z-index: 2;

    .dialog {
        position: absolute;
        background-color: var(--white);
        border-radius: var(--card-radius);
        top: 20%;
        left: 36%;
        width: 30%;

        header {
            background-color: var(--primary);
            width: 100%;
            padding: 0;
            border-radius: 4px 4px 0 0;
            p {
                padding: 15px;
                font-size: var(--heading3);
                color: var(--white);
                font-weight: var(--bold);
            }
            span {
                cursor: pointer;
            }
        }

        main {
            padding: 15px;
            gap: 15px;
        }

        .no-items {
            padding: 50px;
            text-align: center;
            h2 {
                font-size: var(--heading3);
                color: var(--grey6);
                font-weight: var(--bold);
                margin-bottom: 20px;
            }

            p {
                font-size: var(--body);
                font-weight: var(--regular);
                color: var(--grey3);
            }
        }

        .total-line {
            background-color: var(--grey1);
            height: 2px;
            margin-top: 20px;
        }

        .total {
            padding: 20px 10px;
            h2 {
                font-size: var(--headline);
                font-weight: var(--semibold);
                color: var(--grey6);
            }

            p {
                font-size: var(--body);
                color: var(--grey3);
                font-weight: var(--semibold);
            }
        }
        
    }

`