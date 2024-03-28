import styled from "styled-components";
import { ClaimPageHeader } from "../../Header/ClaimPageHeader";
import { ClaimPageField } from "./ClaimPageField/ClaimPageField";
import { ClaimPageInfo } from "./ClaimPageInfo";
import { ClaimPageConfirm } from "../../Buttons/PageButtons/ClaimPageConfirm";

const Container = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    @media (max-width: 500px) {
        width: 90%
    }
`

const Confirm = styled.div`
    width: 100%;
    display: flex;
`


export const ClaimPage = () => {
    return(
        <Container>
            <ClaimPageHeader/>
            <ClaimPageField/>
            <Confirm>
                <ClaimPageConfirm/>
            </Confirm>
            <ClaimPageInfo/>
        </Container>
    )
}