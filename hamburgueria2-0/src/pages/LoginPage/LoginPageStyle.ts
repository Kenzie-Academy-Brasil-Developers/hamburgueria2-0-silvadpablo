import styled from "styled-components";

export const LoginPageStyle = styled.div`
    width: 100%;
    height: 100vh;
    gap: 60px;

    .form-div {
        width: 25%;
    }

    .logo-div {
        width: 25%;
    }
    
    @media (max-width: 900px) {
        .form-div {
            width: 40%;
        }
    
        .logo-div {
            width: 40%;
        }
    }

    @media (max-width: 600px) {
        flex-direction: column-reverse;
        height: unset;
        padding: 20px 0;
        .form-div {
            width: 80%;
        }
    
        .logo-div {
            width: 80%;
        }
    }
`