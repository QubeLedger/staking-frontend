import styled from "styled-components";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useAmountLiquidUnstakeStore } from "../../../../hooks/useAmountInStore";
import { FormEvent } from "react";

const Input = styled.input <{ TextColor: string }>`
    width: 100%;
    height: 100%;
    color: ${props => props.TextColor};
    font-size: 25px;
    border: none;
    text-align: right;
    padding-right: 15px;
    @media (max-width: 500px) {
        font-size: 20px;   
    }
`


export const WithdrawalPageInput = () => {

    const [theme, setTheme] = useToggleTheme();

    const [amtIn, setAmountLiquidUnstakeStore] = useAmountLiquidUnstakeStore()

    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value == undefined) {
            setAmountLiquidUnstakeStore(
                {
                    amt: "",
                    base: amtIn.base,
                    logo: amtIn.logo,
                    denom: amtIn.denom,
                    base_out: amtIn.base_out,
                    denom_out: amtIn.denom_out,
                }
            );
        } else {
            setAmountLiquidUnstakeStore(
                {
                    amt: e.currentTarget.value,
                    base: amtIn.base,
                    logo: amtIn.logo,
                    denom: amtIn.denom,
                    base_out: amtIn.base_out,
                    denom_out: amtIn.denom_out,
                }
            );
        }
    };

    return(
        <Input TextColor={theme.TextColor} onChange={HandleInputAmpunt} placeholder="0"></Input>
    )
}

