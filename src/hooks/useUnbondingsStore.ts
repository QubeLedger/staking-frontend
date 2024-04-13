import { createStore } from './store';

export interface Unbonding {
        chain_id: string;
        epoch_number: number;
        address: string;
        stk_amount: {
                denom: string;
                amount: number;
        }
        unbond_amount: {
                denom: string;
                amount: number;
        }
        status: string,
}

const defaultStateUnbondings: Array<Unbonding> = [];

export const [useUnbondingsStore] = createStore(defaultStateUnbondings);