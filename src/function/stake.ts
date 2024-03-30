import {
        MsgClaim,
        MsgLiquidStake,
        MsgLiquidUnstake,
        MsgRedeem,
        COSMOS_LIQUID_STAKE_URL,
        COSMOS_LIQUID_UN_STAKE_URL,
        REDEEM_URL,
        CLAIM_URL,
} from "../constants/core/liquidstakeibc/v1beta1/msgs";
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
import { coin } from "@cosmjs/amino";

export interface LiquidStakeMsgTypes {
        typeUrl?: string;
        value?: MsgLiquidStake;
}

export interface TransferMsgTypes {
        typeUrl?: string;
        value?: MsgTransfer;
}

export interface LiquidUnStakeMsgTypes {
        typeUrl?: string;
        value?: MsgLiquidStake;
}

export interface ClaimMsgTypes {
        typeUrl?: string;
        value?: MsgClaim;
}

export const LiquidStakeMsg = (
        address: string,
        amount: string,
): LiquidStakeMsgTypes => {
        return {
                typeUrl: COSMOS_LIQUID_STAKE_URL,
                value: MsgLiquidStake.fromPartial({
                        delegatorAddress: address,
                        amount: amount,
                })
        };
};

export const LiquidUnStakeMsg = (
        address: string,
        amount: string,
): LiquidUnStakeMsgTypes => {
        return {
                typeUrl: COSMOS_LIQUID_UN_STAKE_URL,
                value: MsgLiquidUnstake.fromPartial({
                        delegatorAddress: address,
                        amount: amount,
                })
        };
};

export const RedeemMsg = (
        address: string,
        amount: string,
): LiquidUnStakeMsgTypes => {
        return {
                typeUrl: REDEEM_URL,
                value: MsgRedeem.fromPartial({
                        delegatorAddress: address,
                        amount: amount
                })
        };
};

export const ClaimMsg = (address: string): ClaimMsgTypes => {
        return {
                typeUrl: CLAIM_URL,
                value: MsgClaim.fromPartial({
                        delegatorAddress: address
                })
        };
};