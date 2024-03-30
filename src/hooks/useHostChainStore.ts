import { createStore } from "./store";
import { Coin } from "./useBalanceStore";

export interface HostChainLSParams {
        deposit_fee: number,
        restake_fee: number,
        unstake_fee: number,
        redemption_fee: number,
        lsm_validator_cap: number,
        lsm_bond_factor: number,
        max_entries: number,
        redelegation_acceptable_delta: number,
        upper_c_value_limit: number,
        lower_c_value_limit: number,
}

export interface ICAAccount {
        address: string,
        balance: Coin,
        owner: string,
        channel_state: string,
}

export interface Validator {

        operator_address: string,
        status: string,
        weight: number,
        delegated_amount: number,
        exchange_rate: number,
        unbonding_epoch: number,
        delegable: boolean
}

export interface HostChain {
        chain_id: string,
        connection_id: string,
        params: HostChainLSParams,
        host_denom: string,
        channel_id: string,
        port_id: string,
        delegation_account: ICAAccount,
        rewards_account: ICAAccount,
        validators: Validator[],
        minimum_deposit: number,
        c_value: number,
        last_c_value: number,
        unbonding_factor: number,
        active: boolean,
        flags: {
                lsm: boolean
        },
}

export const [useHostChainStore] = createStore(<HostChain>{
        c_value: 0
});