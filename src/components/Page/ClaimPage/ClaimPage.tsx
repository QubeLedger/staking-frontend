import styled from "styled-components";
import { ClaimPageHeader } from "../../Header/ClaimPageHeader";
import { ClaimPageField } from "./ClaimPageField/ClaimPageField";
import { ClaimPageInfo } from "./ClaimPageInfo";
import { ClaimPageConfirm } from "../../Buttons/PageButtons/ClaimPageConfirm";
import { useWallet } from "../../../hooks/useWallet";
import { useClient } from "../../../hooks/useClient";
import { useBalancesStore } from "../../../hooks/useBalanceStore";
import { useEffect } from "react";
import { UpdateBalances } from "../../../web3/balances";
import { InitSigner } from "../../../web3/stargate";
import { useUnbondingsStore } from "../../../hooks/useUnbondingsStore";
import { UpdateUnbondings } from "../../../web3/unbonding";
import { ClaimModalTransaction } from "../../Modal/PageModal/ModalTransaction/ClaimModalTransaction/ClaimModalTransaction";

const Container = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    @media (max-width: 500px) {
        width: 90%
    }
`

const Confirm = styled.div`
    width: 100%;
    display: flex;
`


export const ClaimPage = () => {

    const [ wallet, setWallet ] = useWallet();
	const [ client, setClient ] = useClient();
	const [ balances, setBalances ] = useBalancesStore();
    const [ unbondings, setUnbondings] = useUnbondingsStore();

    useEffect(() => {
        async function update() {
            if (wallet.wallet !== null) {
                let blns = await UpdateBalances(wallet, balances);
                setBalances(blns)

                let client = await InitSigner();
                setClient(client)

                let unb = await UpdateUnbondings(wallet);
                setUnbondings(unb)
            }
        }
        update()
    }, [])

    return(
        <Container>
            <ClaimPageHeader/>
            <ClaimPageField/>
            <ClaimModalTransaction />
            <ClaimPageInfo/>
        </Container>
    )
}