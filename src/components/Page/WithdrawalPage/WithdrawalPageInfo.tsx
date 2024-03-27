import styled from "styled-components";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    @media (max-width: 500px) {
        margin-top: 15px;
    }
`

const InfoText = styled.h3`
    font-size: 16px;
    color: #aaa;
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
    line-height: 2em;
    @media (max-width: 500px) {
        font-size: 13px;
    }
`

const ImportantField = styled.h3 <{ TextColor: string }>`
    font-size: 16px;
    color: ${props => props.TextColor};
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
    line-height: 2em;
    @media (max-width: 500px) {
        font-size: 13px;
    }
`


export const WithdrawalPageInfo = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <Container>
            <div>
                <ImportantField TextColor={theme.TextColor}>Unbonding</ImportantField>
                <InfoText>You will receive</InfoText>
                <InfoText>Exchange rate</InfoText>
                <InfoText>Max transaction fee</InfoText>
            </div>
            <div style={{textAlign: "right"}}>
                <InfoText style={{color: "#6CBBFF"}}>21 - 24 days</InfoText>
                <InfoText>0 ATOM</InfoText>
                <InfoText>1 ATOM = 1.326 qsATOM</InfoText>
                <InfoText>0.01 QUBE</InfoText>
            </div>
        </Container>
    )
}