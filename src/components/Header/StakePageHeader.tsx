import styled from "styled-components";
import { useToggleTheme } from "../../hooks/useToggleTheme";
import { useAmountLiquidStakeStore } from "../../hooks/useAmountInStore";

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
`


export const StakePageHeader = () => {

    const [theme, setTheme] = useToggleTheme()
    const [amtIn, setAmountLiquidStakeStore] = useAmountLiquidStakeStore()

    return(
        <Header>
            <PageText TextColor={theme.TextColor}>Stake {amtIn.base}</PageText>
            <PageDescription>
                Stake {amtIn.base} and receive {amtIn.base_out} while staking.
            </PageDescription>
        </Header>
    )
}