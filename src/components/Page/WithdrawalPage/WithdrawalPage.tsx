import styled from "styled-components"
import { StakePageHeader } from "../../Header/StakePageHeader";
import { WithdrawalPageField } from "./WithdrawalPageFiels/WithdrawalPageField";
import { WithdrawalPageInfo } from "./WithdrawalPageInfo";
import { WithdrawalPageHeader } from "../../Header/WithdrawalPageHeader";
import { WithdrawalModalTransaction } from "../../Modal/PageModal/ModalTransaction/WithdrawalModalTransaction/WithdrawalModalTransaction";
import { UpdateBalances } from '../../../connection/balances';
import { InitSigner } from '../../../connection/stargate';
import { useWallet } from "../../../hooks/useWallet";
import { useClient } from "../../../hooks/useClient";
import { useBalancesStore } from "../../../hooks/useBalanceStore";
import { useEffect } from "react";

const Container = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
        width: 90%;
    }
`


export const WithdrawalPage = () => {

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

    return(
        <Container>
            <WithdrawalPageHeader/>
            <WithdrawalPageField/>
            <WithdrawalModalTransaction/>
            <WithdrawalPageInfo/>
        </Container>
    )
}