import { QUBE_TESTNET_INFO } from "../constants";
import { Wallet } from "../hooks/useWallet";
import { Coin } from "../hooks/useBalanceStore";
import { Unbonding } from "../hooks/useUnbondingsStore";

export async function UpdateUnbondings(wallet: Wallet): Promise<Array<Unbonding>> {
        let unbondings: Array<Unbonding> = [];
        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/liquidstakeibc/v1beta1/user_unbondings/${wallet.wallet.bech32Address}?pagination.limit=1000`)
                let unbondingsJson = await res.json()
                let unbondingsArray = unbondingsJson.user_unbondings;
                unbondingsArray.map((unbonding: any) => {
                        unbondings.push({
                                chain_id: unbonding.chain_id,
                                epoch_number: Number(unbonding.epoch_number),
                                address: unbonding.address,
                                stk_amount: {
                                        denom: unbonding.stk_amount.denom,
                                        amount: unbonding.stk_amount.amount,
                                },
                                unbond_amount: {
                                        denom: unbonding.stk_amount.denom,
                                        amount: unbonding.stk_amount.amount,
                                },
                                status: "",
                        })
                })
        } catch (e) {
                return [] as Unbonding[];
        }

        if (unbondings.length > 0) {
                unbondings.map(async(unbonding) => {
                        let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/liquidstakeibc/v1beta1/unbonding/${unbonding.chain_id}/${unbonding.epoch_number}`)
                        let unbondingJson = await res.json()
                        unbonding.status = unbondingJson.unbonding.state == "UNBONDING_PENDING" ? "PENDING" : ""
                        return unbonding
                })
        }

        return unbondings
}