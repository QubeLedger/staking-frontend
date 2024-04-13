import styled from "styled-components";

const Button = styled.button`
    width: 90%;
    height: 55px;
    background: linear-gradient(to right, #74BCFD, #339BFE);
    border: none;
    font-size: 22px;
    font-weight: 600;
    color: white;
    border-radius: 20px;
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


export const StakePageConfirm = () => {
    return(
        <Button>Stake</Button>
    )
}