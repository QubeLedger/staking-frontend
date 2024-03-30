import { TOKEN_INFO } from "../constants"
import { Coin } from "../hooks/useBalanceStore"

export function getBalanceByToken(balances: Coin[], denom: string): number {
        let token = TOKEN_INFO.find((token) => token.Denom == denom)
        let balance = balances.find((b) => b.denom == denom)
    
        return (Number(balance?.amt) / 10 ** Number(token?.Decimals))
    }
    