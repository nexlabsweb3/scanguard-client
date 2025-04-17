'use client';
import useArgentWebWallet from '@/app/hooks/argentSDKWallet/useArgentWebWallet';
import { UseArgentAccountResult } from '@/types';
import React, { useState, useEffect, useCallback, createContext } from 'react';
import { AccountInterface } from 'starknet';

export const AccountContext = createContext<UseArgentAccountResult | undefined>(
  undefined
);

export const ArgentInvisibleProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { argentWebWallet } = useArgentWebWallet();

  const [state, setState] = useState<
    Omit<UseArgentAccountResult, 'refreshAccount'>
  >({
    status: 'disconnected',
  });

  const checkExistingConnection = useCallback(async () => {
    try {
      const response = await argentWebWallet.connect();
      if (!response) {
        setState({
          status: 'disconnected',
          account: undefined,
          address: undefined,
          isConnected: false,
          isConnecting: false,
          isDisconnected: true,
          isReconnecting: false,
        });
        return;
      }

      const { account } = response;
      if (account.getSessionStatus() !== 'VALID') {
        setState({
          status: 'disconnected',
          account: undefined,
          address: undefined,
          isConnected: false,
          isConnecting: false,
          isDisconnected: true,
          isReconnecting: false,
        });
        return;
      }

      setState({
        status: 'connected',
        account: account as unknown as AccountInterface,
        address: account.address,
        isConnected: true,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: false,
      });
    } catch (error) {
      console.error('Connection error:', error);
      setState({
        status: 'disconnected',
        account: undefined,
        address: undefined,
        isConnected: false,
        isConnecting: false,
        isDisconnected: true,
        isReconnecting: false,
      });
    }
  }, [argentWebWallet]);

  useEffect(() => {
    checkExistingConnection();
  }, [checkExistingConnection]);

  return (
    <AccountContext.Provider
      value={{ ...state, refreshAccount: checkExistingConnection }}
    >
      {children}
    </AccountContext.Provider>
  );
};
