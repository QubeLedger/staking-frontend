import ATOMLogo from "../assets/svg/AtomLogo.webp";
import qsATOMLogo from "../assets/svg/qsATOM.svg";

export interface TokenInfo {
        Denom: string
        Base: string
        Network: string
        Logo: string
        Decimals: number
        type: string,
}

export const TOKEN_INFO: TokenInfo[] = [
        {
                Denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
                Base: "ATOM",
                Network: "Cosmos Hub",
                Logo: ATOMLogo,
                Decimals: 6,
                type: "token",
        },
        {
                Denom: "qs/uatom",
                Base: "qsATOM",
                Network: "Qube Private Testnet",
                Logo: qsATOMLogo,
                Decimals: 6,
                type: "stake-token"
        },
]

