import styled from "styled-components";

const InfoBlock = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LTVBlock = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
`

const InfoText = styled.h1`
    font-size: 16px;
    color: #BABABA;
    margin: 0;
`

const LTV = styled.h1`
    font-size: 16px;
`

const LTVInfo = styled.h1 <{TextColor: string}>`
    font-size: 16px;
    color: ${props => props.TextColor};
`

const BlockInfo = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
    align-items: center;
    margin-top: 5px;
`

export const WithdrawalModalInfo = () => {
        return(
        <InfoBlock>
           <BlockInfo>
                <InfoText>APY</InfoText>
                <InfoText>13%</InfoText>
            </BlockInfo>
            <BlockInfo>
                <InfoText>APY</InfoText>
                <InfoText>13%</InfoText>
            </BlockInfo> 
        </InfoBlock>
    )
}