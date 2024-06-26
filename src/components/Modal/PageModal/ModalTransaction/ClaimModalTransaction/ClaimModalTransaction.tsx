import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { useShowModalTransaction, useShowWalletModal } from '../../../../../hooks/useShowModal';
import { useToggleTheme } from '../../../../../hooks/useToggleTheme';
import { Modal } from '../../../Modal';
import { useWallet } from '../../../../../hooks/useWallet';
import { useUnbondingsStore } from '../../../../../hooks/useUnbondingsStore';

const ModalDialogOverlay = animated(DialogOverlay);
const StyledDialogOvelay = styled(ModalDialogOverlay)`
    &[data-reach-dialog-overlay] {
        z-index: 1;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: auto;
        display:flex;
        align-items: center;
        justify-content: center; 
        transition: background-color 3s;
        background-color: rgba(0,0,0,.45);
    }
`

const OpenButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const CloseButton = styled.button <{ TextColor: string }>`
    width: 25px;
    height: 25px;
    font-size: 30px;
    margin-right: 20px;
    margin-top: -1px;
    background-color: transparent;
    border: none;
    color: ${props => props.TextColor};
    margin-left: auto;
    outline: none;
`

const OpenButton = styled.button`
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    background: linear-gradient(to left, #3B9CFC, #6CBBFF);
    border: none;
    margin: 0 auto;
    border-radius: 12px;
    cursor: pointer;
    color: #fff;
    margin-top: 20px;
    transition: all .15s ease-in-out;
    &:active {
         transform: scale(0.95);
    }
`

const InactiveButton = styled.button`
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    background: #757575;
    border: none;
    margin: 0 auto;
    border-radius: 12px;
    cursor: pointer;
    color: #fff;
    margin-top: 20px;
`

const CloseDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
    margin-top: 20px;
`

const ContentDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const HeaderText = styled.a <{ TextColor: string }>`
    font-size: 14px;
    color: ${props => props.TextColor};
    white-space: nowrap;
`

const HeaderBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 17px;
`


const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) <{ modalBgColor: string, modalBorder: string }>`
    &[data-reach-dialog-content] {
        background-color: ${props => props.modalBgColor};
        width: 375px;
        height: 400px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        border:  ${props => props.modalBorder};
        margin-top: -10px;
        position: relative;
        outline: none;
        @media (max-width: 330px) {
            width: 305px;
        }
    }
`


export const ClaimModalTransaction = () => {

    const open = () => { setShowModalTranzaction({ b: true }) };
    const close = () => { setShowModalTranzaction({ b: false }) };
    const [ ShowModalTranzaction, setShowModalTranzaction] = useShowModalTransaction();
    const [ theme, setTheme] = useToggleTheme();
    const [ wallet, setWallet] = useWallet();
    const [ walletModalStatus, setWalletModalStatus] = useShowWalletModal();
    const [ unbondings, setUnbondings] = useUnbondingsStore();

    const Content =
        <>
            <CloseDiv>
                <HeaderBlock>
                    <HeaderText TextColor={theme.TextColor}>Confirm Claim</HeaderText>
                </HeaderBlock>
                <CloseButton TextColor={theme.TextColor}>
                    <a style={{ cursor: "pointer" }} onClick={close} aria-hidden>×</a>
                </CloseButton>
            </CloseDiv>
            <ContentDiv>
            </ContentDiv>
        </>

    const ModalComponent = Modal(
        ShowModalTranzaction.b,
        close,
        Content,
        theme.modalBgColor,
        theme.modalBorder
    )

    let Button;

    if (wallet.init == false) {
        Button = <OpenButtonBlock onClick={() => { setWalletModalStatus({ b: true }) }}>
            <OpenButton>Connect wallet</OpenButton>
        </OpenButtonBlock>
    } else if (unbondings.length == 0) {
        Button = <OpenButtonBlock>
            <InactiveButton>No unbonding tokens</InactiveButton>
        </OpenButtonBlock>
    } else {
        Button = <OpenButtonBlock>
            <OpenButton onClick={open}>Confirm</OpenButton>
            {ModalComponent}
        </OpenButtonBlock>
    }

    return (
        <>
            {Button}
        </>
    );
}