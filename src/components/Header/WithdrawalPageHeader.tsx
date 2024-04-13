import styled from "styled-components";
import { useToggleTheme } from "../../hooks/useToggleTheme";
import { useAmountLiquidUnstakeStore } from "../../hooks/useAmountInStore";

const Header = styled.div`
    width: 100%;
    text-align: center;
`

const PageText = styled.a <{TextColor: string}>`
    font-size: 26px;
    color: ${props => props.TextColor};
    font-weight: 500;
    @media (max-width: 500px) {
        font-size: 22px;
    }
`

const PageDescription = styled.h3`
    font-size: 12px;
    color: #bbb;
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
    @media (max-width: 500px) {
        font-size: 12px;
    }
`


export const WithdrawalPageHeader = () => {

    const [theme, setTheme] = useToggleTheme()
    const [amtIn, setAmountLiquidUnstakeStore] = useAmountLiquidUnstakeStore()

    return(
        <Header>
            <PageText TextColor={theme.TextColor}>Withdrawal {amtIn.base_out}</PageText>
            <PageDescription>
                Request {amtIn.base} withdrawal and claim {amtIn.base_out}
            </PageDescription>
        </Header>
    )
}