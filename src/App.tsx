import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, App } from 'antd';
import { AppProvider } from "./store"
import Routelist from './router/index'

function Root() {
    return (
        <AppProvider>
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#29CC7D',
                    borderRadius: 10,
                    colorBgContainer: '#f6ffed'
                },
            }}>
                <App>
                    <BrowserRouter>
                        <Routelist />
                    </BrowserRouter>
                </App>
            </ConfigProvider>
        </AppProvider>
    )
}

export default Root