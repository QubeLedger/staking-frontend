import styled from "styled-components";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const Input = styled.input <{ TextColor: string }>`
    width: 100%;
    height: 100%;
    color: ${props => props.TextColor};
    font-size: 25px;
    border: none;
    text-align: right;
    padding-right: 15px;
    @media (max-width: 500px) {
        font-size: 20px;   
    }
`


export const StakePageInput = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <Input TextColor={theme.TextColor} placeholder="0"></Input>
    )
}

