import styled from "styled-components";
import qsAtomlogo from '../../../../assets/svg/qsATOM.svg'
import qsTIAlofo from '../../../../assets/svg/qsTIA.svg'
import { ClaimPageAmount } from "./ClaimPageAmount";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useUnbondingsStore } from "../../../../hooks/useUnbondingsStore";
import { useWallet } from "../../../../hooks/useWallet";
import { TOKEN_INFO } from "../../../../constants";

const Container = styled.div <{ BorderField: string, claimBg: string }>`
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

const NoAssets = styled.div <{ BorderField: string, claimBg: string }>`
    width: 100%;
    height: 220px;
    background: ${props => props.claimBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const AmountContainer = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
`

const StakeAmount = styled.a <{ TextColor: string }>`
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



export const ClaimPageField = () => {

    const [theme, setTheme] = useToggleTheme()
    const [unbondings, setUnbondings] = useUnbondingsStore();
    const [wallet, setWallet] = useWallet();

    let MainComponent;

    if (wallet.init == false || unbondings.length == 0) {
        MainComponent = <>
            <NoAssets BorderField={theme.BorderField} claimBg={theme.claimBg}>
                <h4 style={{ color: "#C0C0C0" }}>No withdrawal requests detected.</h4>
            </NoAssets>
        </>
    } else {
        let TempMainComponent = unbondings.map((unbonding) =>
            <Field style={{ border: unbonding.status == "PENDING" ? "2px solid #EC8600" : "2px solid #44A884" }}>
                <TokenContainer>
                    <TokenLogo src={TOKEN_INFO.find((token) => token.Denom == unbonding.stk_amount.denom)?.Logo} />
                    <TokenName TextColor={theme.TextColor}>{TOKEN_INFO.find((token) => token.Denom == unbonding.stk_amount.denom)?.Base}</TokenName>
                </TokenContainer>
                <AmountContainer>
                    <StakeAmount TextColor={theme.TextColor}>{
                        unbonding.stk_amount.amount / (10 ** Number(TOKEN_INFO.find((token) => token.Denom == unbonding.stk_amount.denom)?.Decimals))
                    } {
                            TOKEN_INFO.find((token) => token.Denom == unbonding.stk_amount.denom)?.Base
                        }</StakeAmount>
                    <TokenAmount TextColor={theme.TextColor}>{
                        unbonding.unbond_amount.amount / (10 ** Number(TOKEN_INFO.find((token) => token.Denom == unbonding.unbond_amount.denom)?.Decimals))
                    } {
                            TOKEN_INFO.find((token) => token.Denom == unbonding.unbond_amount.denom)?.Base
                        }</TokenAmount>
                </AmountContainer>
            </Field>
        )

        MainComponent = <Container BorderField={theme.BorderField} claimBg={theme.claimBg}>
            {TempMainComponent}
        </Container>
    }
    return (
    <>
        {MainComponent}
    </>
    )
}




