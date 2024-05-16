import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'
import Chains from './Chains'

const projectId = 'fdbad4749b724715af1e28c9e33e1214'
// 3. Create modal
const metadata = {
    name: 'Website',
    description: 'description',
    url: 'https://mywebsite.com', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
}

const connectChainId = Number(import.meta.env.VITE_CHAIN_ID)
const getChain = (chainId: number) => {
    return Chains.find(chain => chain.chainId === chainId)
}

const customWallets = [
    {
        id: 'tronlink',
        name: 'TronLink',
        homepage: 'https://tronlink.org',
        image_url: 'https://lh3.googleusercontent.com/1BPbdzIDWE2RYHDIZV3K--KG2VWgS_R8yjs2ZVLvoVnAhpCMWZPwJGJ2Q5PjXbVXUMj7u6DUh-Z7wQ9vJVf37d-h=s60',
    }
]

const initWeb3Modal = () => {
    createWeb3Modal({
        defaultChain: getChain(connectChainId),
        ethersConfig: defaultConfig({ metadata }),
        chains: Chains,
        projectId,
        customWallets,
    })
}
export { connectChainId, initWeb3Modal }