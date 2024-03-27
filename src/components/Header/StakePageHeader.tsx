import styled from "styled-components";
import { useToggleTheme } from "../../hooks/useToggleTheme";

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

    return(
        <Header>
            <PageText TextColor={theme.TextColor}>Stake ATOM</PageText>
            <PageDescription>
                Stake ATOM and receive qsATOM while staking.
            </PageDescription>
        </Header>
    )
}