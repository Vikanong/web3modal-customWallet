type ChainType = {
    chainId: number
    name: string
    currency: string
    explorerUrl: string
    rpcUrl: string
}

const Chains: ChainType[] = [
    {
        chainId: 1,
        name: 'Ethereum',
        currency: 'ETH',
        explorerUrl: 'https://etherscan.io',
        rpcUrl: 'https://cloudflare-eth.com'
    },
    {
        chainId: 56,
        name: 'Binance Smart Chain',
        currency: 'BNB',
        explorerUrl: 'https://bscscan.com',
        rpcUrl: 'https://bsc-dataseed.binance.org/'
    },
    {
        chainId: 97,
        name: 'Binance Smart Chain Testnet',
        currency: 'BNB',
        explorerUrl: 'https://testnet.bscscan.com',
        rpcUrl: 'https://bsc-prebsc-dataseed.bnbchain.org/'
    },
    {
        chainId: 1337,
        name: 'Binance Smart Chain private',
        currency: 'BNB',
        explorerUrl: 'https://testnet.bscscan.com',
        rpcUrl: 'http://127.0.0.1:8545'
    },
];

export default Chains