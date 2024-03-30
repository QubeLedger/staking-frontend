import { createStore } from './store';
import AtomLogo from "../assets/svg/AtomLogo.webp"
import qsAtomLogo from "../assets/svg/qsATOM.svg"
import { TOKEN_INFO } from '../constants';

export interface AmountStake {
        base: string;
        logo: string;
        denom: string;
        amt: string;
        base_out: string;
        denom_out: string;
}

export interface Amount {
        base: string;
        logo: string;
        denom: string;
        amt: string;
}

const defaultStateStake: AmountStake = { 
        base: "ATOM",
        logo: AtomLogo,
        denom: String(TOKEN_INFO.find((token) => token.Base == "ATOM")?.Denom),
        amt: "",
        base_out: "qsATOM",
        denom_out: String(TOKEN_INFO.find((token) => token.Base == "qsATOM")?.Denom),
};

const defaultStateUnstake: AmountStake = { 
        base: "qsATOM",
        logo: qsAtomLogo,
        denom: String(TOKEN_INFO.find((token) => token.Base == "qsATOM")?.Denom),
        amt: "",
        base_out: "ATOM",
        denom_out: String(TOKEN_INFO.find((token) => token.Base == "ATOM")?.Denom),
};

const defaultState: Amount = { 
        base: "Select Token",
        logo: "",
        denom: "",
        amt: "",
};

export const [useAmountLiquidStakeStore] = createStore(defaultStateStake);
export const [useAmountLiquidUnstakeStore] = createStore(defaultStateUnstake);
export const [useAmountRedeemStore] = createStore(defaultState);
export const [useAmountClaimStore] = createStore(defaultState);