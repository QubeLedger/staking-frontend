import styled from "styled-components";
import { useToggleTheme } from "../../../hooks/useToggleTheme";
import { useHostChainStore } from "../../../hooks/useHostChainStore";
import { useAmountLiquidStakeStore } from "../../../hooks/useAmountInStore";
import { QUBE_TESTNET_INFO } from "../../../constants";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    @media (max-width: 500px) {
        margin-top: 13px;
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


export const StakePageInfo = () => {

    const [theme, setTheme] = useToggleTheme()
    const [hostChain, setHostChain] = useHostChainStore();
    const [amtIn, setAmountLiquidStakeStore] = useAmountLiquidStakeStore()

    return(
        <Container>
            <div>
                <ImportantField TextColor={theme.TextColor}>Annual percentage rate</ImportantField>
                <InfoText>You will receive</InfoText>
                <InfoText>Exchange rate</InfoText>
                <InfoText>Max transaction fee</InfoText>
            </div>
            <div style={{textAlign: "right"}}>
                <InfoText style={{color: "#44A884"}}>0.0%</InfoText>
                <InfoText>0 {amtIn.base_out}</InfoText>
                <InfoText>1 {amtIn.base} = {hostChain.c_value} {amtIn.base_out}</InfoText>
                <InfoText>{QUBE_TESTNET_INFO.feeCurrencies[0].gasPriceStep.average} {QUBE_TESTNET_INFO.feeCurrencies[0].coinDenom}</InfoText>
            </div>
        </Container>
    )
}