import React, { useState, useEffect } from 'react';
import { useConnect, useConnectEvents } from '../hooks/useConnect'
import TronWeb from 'tronweb';

// Replace with actual USDT (TRC20) contract address and ABI
const usdtContractAddress = 'TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn';

declare global {
    interface Window {
        tronWeb?: typeof TronWeb & {
            defaultAddress: { base58: string };
        };
    }
}

const UserInfo: React.FC = () => {
    const { connect, close } = useConnect()
    const { data } = useConnectEvents()
    const [tronWeb, setTronWeb] = useState<typeof TronWeb | null>(null);
    const [userAddress, setUserAddress] = useState<string>('');

    useEffect(() => {
        const init = async () => {
            // Check for TronLink availability
            if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                if (data && data.event === 'SELECT_WALLET' && data.properties.name === 'TronLink') {
                    close()
                    await window.tronWeb.request({
                        method: 'tron_requestAccounts'
                    });
                    setUserAddress(window.tronWeb.defaultAddress.base58);
                    setTronWeb(window.tronWeb);
                }
            } else {
                console.error("Please install TronLink extension");
            }
        };
        init();
    }, [data]);

    const sendTronUSDT = async (toAddress: string, amount: number) => {
        if (!tronWeb) {
            alert('Please connect your TronLink wallet first');
            return;
        }
        try {
            // const usdtContract = tronWeb.contract(usdtAbi, usdtContractAddress);
            const usdtContract = await tronWeb.contract().at(usdtContractAddress);
            console.log(usdtContract);
            const tx = await usdtContract.transfer(toAddress, amount).send();
            console.log('Transaction successful: ', tx);
            alert('Transaction successful');
        } catch (error) {
            console.error('Error sending USDT: ', error);
            alert('Transaction failed');
        }
    };

    return (
        <div>
            <h1>Connect Wallet</h1>
            <button onClick={() => connect()}>Connect Wallet</button>
            <div>{userAddress ? `Connected: ${userAddress}` : 'Not Connected'}</div>
            <input type="text" id="toAddress" placeholder="Recipient Address" />
            <input type="number" id="amount" placeholder="Amount" />
            <button onClick={() => {
                const toAddress = (document.getElementById('toAddress') as HTMLInputElement).value;
                const amount = parseInt((document.getElementById('amount') as HTMLInputElement).value) * 1e6; // Assuming 6 decimals for USDT
                sendTronUSDT(toAddress, amount);
            }}>Send USDT</button>
        </div>
    );
};

export default UserInfo;
