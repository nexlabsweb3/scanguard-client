import React, { useContext } from 'react';
import { UseArgentAccountResult } from '@/types';
import { AccountContext } from '@/provider/ArgentInvisibleProvider';

export const useArgentAccount = (): UseArgentAccountResult => {
  const context = useContext(AccountContext);
  if (!context)
    throw new Error('useInvisibleAccount must be used within AccountProvider');
  return context;
};
