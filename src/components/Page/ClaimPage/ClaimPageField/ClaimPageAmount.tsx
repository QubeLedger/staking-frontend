import styled from "styled-components";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const Container = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
`

const QsAmount = styled.a <{ TextColor: string }>`
    font-size: 17px;
    color: ${props => props.TextColor};
    font-weight: 500;
    @media (max-width: 500px) {
        font-size: 14px;   
    }
`

const TokenAmount = styled.a <{ TextColor: string }>`
    font-size: 12px;
    color: ${props => props.TextColor};
    font-weight: 500;
    @media (max-width: 500px) {
        font-size: 14px;   
    }
`



export const ClaimPageAmount = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <Container>
            <QsAmount TextColor={theme.TextColor}>10 qsATOM</QsAmount>
            <TokenAmount TextColor={theme.TextColor}>9.1 ATOM</TokenAmount>
        </Container>
    )
}