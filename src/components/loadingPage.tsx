import { Spin } from 'antd'
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.692);
`


const LoadingPage = () => {
    return (
        <Container>
            <Spin size="large" />
        </Container>
    )
}

export default LoadingPage