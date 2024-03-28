import styled from "styled-components";
import { MainHeaderLink } from "./CustomLink";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { useToggleTheme } from "../../../hooks/useToggleTheme";
import myLogo from '../../../assets/svg/WalletLogo.svg'
import earnLogo from '../../../assets/svg/EarnLogo.svg'
import borrowLogo from '../../../assets/svg/BorrowLogo.svg'
import myBlackLogo from '../../../assets/svg/myBlackLogo.svg'
import earnBlackLogo from '../../../assets/svg/earnBlackLogo.svg'
import borrowBlackLogo from '../../../assets/svg/borrowBlackLogo.svg'


const BlockLink = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 50px;
    height: 60px;
    justify-content: center;
    margin-right: 30px;
    margin-left: 203px;
    @media (max-width: 1110px) {
        gap: 30px;
    }
`

const NavBlock = styled.div <{ navBlockBg: string }>`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.navBlockBg};
    transition: padding-bottom .3s ease-in-out;
`

const LinkBlock = styled.div`
    width: 152px;
    margin-top: -5px;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
        justify-content: center;
    }
`

const MobLinkBlock = styled.div`
    width: 150px;
    display: flex;
    outline: none;
    margin: 0 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
    }
`

const MobBlockLink = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    transition: max-height .3s ease-in-out;
    justify-content: center;
    align-items: center;
`

const LinkMobBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
`

const WalletLogo = styled.svg <{ icon: string }>`
    width: 20px;
    height: 20px;
    background: url(${props => props.icon});
    background-repeat: no-repeat;
    background-size: contain;
`


export const DesLink = () => {
    return (
        <BlockLink>
            <LinkBlock>
                <MainHeaderLink to="/">Stake</MainHeaderLink>
            </LinkBlock>
            <LinkBlock>
                <MainHeaderLink to="/withdrawal">Withdrawals</MainHeaderLink>
            </LinkBlock>
            <LinkBlock>
                <MainHeaderLink to="/claim">Claim</MainHeaderLink>
            </LinkBlock>
        </BlockLink>
    )
}

export const MobileLink = () => {

    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme()

    return (
        <LinkMobBlock>
            <NavBlock navBlockBg={theme.navBlockBg}>
                <MobBlockLink>
                    <MobLinkBlock>
                        <MainHeaderLink to="/">
                            <WalletLogo icon={theme.active == true ? myBlackLogo : myLogo}></WalletLogo>
                            Stake
                        </MainHeaderLink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <MainHeaderLink to="/withdrawal">
                            <WalletLogo icon={theme.active == true ? earnBlackLogo : earnLogo}></WalletLogo>
                            Withdrawals
                        </MainHeaderLink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <MainHeaderLink to="/claim">
                            <WalletLogo icon={theme.active == true ? borrowBlackLogo : borrowLogo}></WalletLogo>
                            Claim
                        </MainHeaderLink>
                    </MobLinkBlock>
                </MobBlockLink>
            </NavBlock>
        </LinkMobBlock>
    )
}