import { useWeb3Modal, useSwitchNetwork, useWeb3ModalAccount, useWeb3ModalEvents } from '@web3modal/ethers5/react'
import { connectChainId } from '../config/Web3Modal'

export const useConnect = () => {
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { open, close } = useWeb3Modal()
    const { switchNetwork } = useSwitchNetwork()
    const connect = async () => {
        if (chainId !== connectChainId) {
            await switchNetwork(connectChainId)
        }
        open()
    }
    return { connect, address, chainId, isConnected, switchNetwork, close }
}

export const useConnectEvents = () => {
    const events = useWeb3ModalEvents()
    return events
}