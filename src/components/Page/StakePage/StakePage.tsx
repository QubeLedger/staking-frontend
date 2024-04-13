import styled from "styled-components";
import { StakePageHeader } from "../../Header/StakePageHeader";
import { StakePageField } from "./StakePageFiels/StakePageField";
import { StakePageInfo } from "./StakePageInfo";
import { StakeModalTransaction } from "../../Modal/PageModal/ModalTransaction/StakeModalTransaction/StakeModalTransaction";
import { useWallet } from "../../../hooks/useWallet";
import { useEffect } from "react";
import { useClient } from "../../../hooks/useClient";
import { useBalancesStore } from "../../../hooks/useBalanceStore";
import { UpdateBalances } from '../../../web3/balances';
import { InitSigner } from '../../../web3/stargate';

const Container = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
        width: 90%
    }
`

export const StakePage = () => {

    const [ wallet, setWallet ] = useWallet();
	const [ client, setClient ] = useClient();
	const [ balances, setBalances ] = useBalancesStore();

    useEffect(() => {
        async function update() {
            if (wallet.wallet !== null) {
                let blns = await UpdateBalances(wallet, balances);
                setBalances(blns)

                let client = await InitSigner();
                setClient(client)
            }
        }
        update()
    }, [])

    return (
        <Container>
            <StakePageHeader />
            <StakePageField />
            <StakeModalTransaction />
            <StakePageInfo />
        </Container>
    )
}