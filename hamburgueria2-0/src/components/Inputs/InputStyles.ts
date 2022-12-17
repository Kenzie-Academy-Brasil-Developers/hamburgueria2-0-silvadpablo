import styled from "styled-components";

export const InputStyle = styled.div`
    
    span {
        position: relative;
        width: 0;
        height: 0;
        
        p {
            position: absolute;
            bottom: -8px;
            left: 15px;
            width: max-content;
            padding: 2px;
            background-color: var(--white);
            color: var(--grey5);
            font-size: var(--caption);
        }
    }

    .hidden {
        visibility: hidden;
    }

    input {
        font-family: var(--family);
        border: none;
        outline: none;
        border-radius: var(--radius);
        padding: 20px 15px;
        background-color: var(--grey0);
        color: var(--grey5);


        ::placeholder{
            color: var(--grey5);
            font-size: var(--headline);
            font-weight: var(--regular);
        }

        :focus {
            background-color: var(--white);
            border: 2px solid var(--grey6);
        }
    }
`

export const SeachInputStyle = styled.div`
    span {
        position: relative;
        width: 0;
        height: 0;
        
        img {
            position: absolute;
            top: -10px;
            left: 165px;
            width: max-content;
        }
    }

    img {
        background-color: var(--primary);
        border-radius: var(--radius);
        border: none;
        padding: 12px 20px;
        cursor: pointer;
    }

    input {
        padding: 20px 70px 20px 15px;
        background-color: var(--white);
        outline: none;
        border: 2px solid var(--grey1);
        border-radius: var(--radius);
        color: var(--grey1);

        ::placeholder {
            color: var(--grey3);
        }
        
        :focus {
            border-color: var(--grey6);
            color: var(--grey3);
        }
    }
`