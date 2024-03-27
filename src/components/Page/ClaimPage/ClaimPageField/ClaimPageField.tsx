import styled from "styled-components";
import qsAtomlogo from '../../../../assets/svg/qsATOM.svg'
import qsTIAlofo from '../../../../assets/svg/qsTIA.svg'
import { ClaimPageAmount } from "./ClaimPageAmount";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const Container = styled.div <{BorderField: string, claimBg: string}>`
    width: 100%;
    height: 100%;
    background: ${props => props.claimBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    margin-top: 30px;
    border: ${props => props.BorderField};
    border-radius: 20px;
    @media (max-width: 500px) {
        margin-top: 20px;
    }
`

const Field = styled.div`
    width: 95%;
    height: 60px;
    margin-top: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 500px) {
        height: 55px;
    }
`

const TokenLogo = styled.img`
    width: 40px;
    height: 40px;
    @media (max-width: 500px) {
        width: 35px;
        height: 35px;   
    }
`

const TokenName = styled.a <{ TextColor: string }>`
    font-size: 22px;
    color: ${props => props.TextColor};
    font-weight: 500;
    margin-left: 10px;
    @media (max-width: 500px) {
        font-size: 18px;   
    }
`

const TokenContainer = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`


export const ClaimPageField = () => {

    const [theme, setTheme] = useToggleTheme()

    return (
        <Container BorderField={theme.BorderField} claimBg={theme.claimBg}>
            <Field style={{ border: "2px solid #44A884", marginTop: "0px" }}>
                <TokenContainer>
                    <TokenLogo src={qsAtomlogo} />
                    <TokenName TextColor={theme.TextColor}>qsATOM</TokenName>
                </TokenContainer>
                <ClaimPageAmount />
            </Field>
            <Field style={{ border: "2px solid #EC8600" }}>
                <TokenContainer>
                    <TokenLogo src={qsTIAlofo} />
                    <TokenName TextColor={theme.TextColor}>qsTIA</TokenName>
                </TokenContainer>
                <ClaimPageAmount />
            </Field>
            <Field style={{ border: "2px solid #EC8600" }}>
                <TokenContainer>
                    <TokenLogo src={qsTIAlofo} />
                    <TokenName TextColor={theme.TextColor}>qsTIA</TokenName>
                </TokenContainer>
                <ClaimPageAmount />
            </Field>
            <Field style={{ border: "2px solid #EC8600" }}>
                <TokenContainer>
                    <TokenLogo src={qsTIAlofo} />
                    <TokenName TextColor={theme.TextColor}>qsTIA</TokenName>
                </TokenContainer>
                <ClaimPageAmount />
            </Field>
            <Field style={{ border: "2px solid #EC8600" }}>
                <TokenContainer>
                    <TokenLogo src={qsTIAlofo} />
                    <TokenName TextColor={theme.TextColor}>qsTIA</TokenName>
                </TokenContainer>
                <ClaimPageAmount />
            </Field>
        </Container>
    )
}