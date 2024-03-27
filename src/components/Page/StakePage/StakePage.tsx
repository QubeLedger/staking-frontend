import styled from "styled-components";
import { StakePageHeader } from "../../Header/StakePageHeader";
import { StakePageField } from "./StakePageFiels/StakePageField";
import { StakePageInfo } from "./StakePageInfo";
import { StakeModalTransaction } from "../../Modal/PageModal/ModalTranzaction/StakeModalTranzaction/StakeModalTransaction";


const Container = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
        width: 90%
    }
`

export const StakePage = () => {
    return(
        <Container>
            <StakePageHeader/>
            <StakePageField/>
            <StakeModalTransaction/>
            <StakePageInfo/>
        </Container>
    )
}