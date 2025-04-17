import React, { useMemo } from 'react';
import { ArgentWebWallet } from '@argent/invisible-sdk';

export default function useArgentWebWallet() {
  const argentWebWallet = useMemo(
    () =>
      ArgentWebWallet.init({
        appName: 'coloniz.xyz',
        environment: 'sepolia',
        paymasterParams: {
          apiKey: '874b0d50-e322-4cd4-ad3c-e8810b3d37f0',
        },
        sessionParams: {
          allowedMethods: [],
        },
      }),
    []
  );

  return { argentWebWallet };
}
