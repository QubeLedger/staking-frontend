import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    height: 50px;
    font-size: 16px;
    background: linear-gradient(to right, #74BCFD, #339BFE);
    border: none;
    font-weight: 600;
    color: white;
    border-radius: 12px;
    margin-top: 20px;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: all .15s ease-in-out;
    &:active {
         transform: scale(0.95);
    }
    @media (max-width: 500px) {
        font-size: 16px;   
    }
`


export const ClaimPageConfirm = () => {
    return(
        <Button>Claim</Button>
    )
}