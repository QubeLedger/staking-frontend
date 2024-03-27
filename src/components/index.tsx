import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';
import { MainHeader } from "./Header/MainHeader/MainHeader";
import { StakePage } from "./Page/StakePage/StakePage";
import { ClaimPage } from "./Page/ClaimPage/ClaimPage";
import { WithdrawalPage } from "./Page/WithdrawalPage/WithdrawalPage";
import { useToggleTheme } from "../hooks/useToggleTheme";

const Container = styled.div <{ backgroundColor: string}>`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${props => props.backgroundColor};
`

const PageContainer = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
`


export const Index = () => {

    const [theme, setTheme] = useToggleTheme()

    return (
        <Container backgroundColor={theme.backgroundColor}>
            <MainHeader />
            <PageContainer>
                <Routes>
                    <Route path="/claim" element={<ClaimPage />} />
                    <Route path="/withdrawal" element={<WithdrawalPage />} />
                    <Route path="/" element={<StakePage />} />
                    <Route path="/stake" element={<StakePage />} />
                </Routes>
            </PageContainer>
        </Container>
    )
}