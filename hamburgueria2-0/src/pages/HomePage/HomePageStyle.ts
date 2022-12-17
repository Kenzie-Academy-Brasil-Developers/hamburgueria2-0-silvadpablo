import styled from "styled-components"

export const HomePageStyle = styled.div`
    header {
        max-width: 100%;
        background-color: var(--grey0);
        padding: 28px 15%;
    }
    
    img {
        object-fit: contain;
    }
    
    .icon {
        cursor: pointer;
    }
    
    .header-menu {
        gap: 30px;

        span {
            position: relative;
            width: 0;
            height: 0;
        }

        p {
            background-color: var(--primary);
            color: var(--white);
            border-radius: 50%;
            font-weight: var(--semibold);
            text-align: center;
            width: 15px;
            height: 15px;
            padding: 5px;
            position: absolute;
            right: -70px;
            top: 2px;
            z-index: 1;
            cursor: pointer;
        }
        
        .icon {
            object-fit: contain;
            scale: 90%;
        }
    }

    main {
        padding: 28px 15%;
    }

    ul {
        gap: 50px;
    }
`