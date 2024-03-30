/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const COSMOS_LIQUID_STAKE_URL =
        "/core.liquidstakeibc.v1beta1.MsgLiquidStake";
export const COSMOS_LIQUID_UN_STAKE_URL =
        "/core.liquidstakeibc.v1beta1.MsgLiquidUnstake";
export const REDEEM_URL = "/core.liquidstakeibc.v1beta1.MsgRedeem";
export const CLAIM_URL = "/core.liquidstakeibc.v1beta1.MsgClaim";

export const protobufPackage = "core.liquidstakeibc.v1beta1";

export interface MsgLiquidStake {
  delegatorAddress: string;
  amount: string;
}

export interface MsgLiquidStakeLSM {
  delegatorAddress: string;
  delegations: string[];
}

export interface MsgLiquidUnstake {
  delegatorAddress: string;
  amount: string;
}

export interface MsgRedeem {
  delegatorAddress: string;
  amount: string;
}

export interface MsgClaim {
  delegatorAddress: string;
}

function createBaseMsgLiquidStake(): MsgLiquidStake {
  return { delegatorAddress: "", amount: "" };
}

export const MsgLiquidStake = {
  encode(message: MsgLiquidStake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidStake {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? globalThis.String(object.delegatorAddress) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: MsgLiquidStake): unknown {
    const obj: any = {};
    if (message.delegatorAddress !== "") {
      obj.delegatorAddress = message.delegatorAddress;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidStake>, I>>(base?: I): MsgLiquidStake {
    return MsgLiquidStake.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgLiquidStake>, I>>(object: I): MsgLiquidStake {
    const message = createBaseMsgLiquidStake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgLiquidStakeLSM(): MsgLiquidStakeLSM {
  return { delegatorAddress: "", delegations: [] };
}

export const MsgLiquidStakeLSM = {
  encode(message: MsgLiquidStakeLSM, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    for (const v of message.delegations) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeLSM {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidStakeLSM();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.delegations.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidStakeLSM {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? globalThis.String(object.delegatorAddress) : "",
      delegations: globalThis.Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: MsgLiquidStakeLSM): unknown {
    const obj: any = {};
    if (message.delegatorAddress !== "") {
      obj.delegatorAddress = message.delegatorAddress;
    }
    if (message.delegations?.length) {
      obj.delegations = message.delegations;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidStakeLSM>, I>>(base?: I): MsgLiquidStakeLSM {
    return MsgLiquidStakeLSM.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgLiquidStakeLSM>, I>>(object: I): MsgLiquidStakeLSM {
    const message = createBaseMsgLiquidStakeLSM();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.delegations = object.delegations?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgLiquidUnstake(): MsgLiquidUnstake {
  return { delegatorAddress: "", amount: "" };
}

export const MsgLiquidUnstake = {
  encode(message: MsgLiquidUnstake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidUnstake {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidUnstake {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? globalThis.String(object.delegatorAddress) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: MsgLiquidUnstake): unknown {
    const obj: any = {};
    if (message.delegatorAddress !== "") {
      obj.delegatorAddress = message.delegatorAddress;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidUnstake>, I>>(base?: I): MsgLiquidUnstake {
    return MsgLiquidUnstake.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgLiquidUnstake>, I>>(object: I): MsgLiquidUnstake {
    const message = createBaseMsgLiquidUnstake();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgRedeem(): MsgRedeem {
  return { delegatorAddress: "", amount: "" };
}

export const MsgRedeem = {
  encode(message: MsgRedeem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRedeem {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? globalThis.String(object.delegatorAddress) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
    };
  },

  toJSON(message: MsgRedeem): unknown {
    const obj: any = {};
    if (message.delegatorAddress !== "") {
      obj.delegatorAddress = message.delegatorAddress;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRedeem>, I>>(base?: I): MsgRedeem {
    return MsgRedeem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRedeem>, I>>(object: I): MsgRedeem {
    const message = createBaseMsgRedeem();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgClaim(): MsgClaim {
  return { delegatorAddress: "" };
}

export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgClaim {
    return { delegatorAddress: isSet(object.delegatorAddress) ? globalThis.String(object.delegatorAddress) : "" };
  },

  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    if (message.delegatorAddress !== "") {
      obj.delegatorAddress = message.delegatorAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClaim>, I>>(base?: I): MsgClaim {
    return MsgClaim.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgClaim>, I>>(object: I): MsgClaim {
    const message = createBaseMsgClaim();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
