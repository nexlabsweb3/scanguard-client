import { AccountInterface } from 'starknet';

export type AccountStatus =
  | 'connected'
  | 'disconnected'
  | 'connecting'
  | 'reconnecting';

export type UseArgentAccountResult = {
  account?: AccountInterface;
  address?: `0x${string}`;
  status: AccountStatus;
  isConnected?: boolean;
  isConnecting?: boolean;
  isDisconnected?: boolean;
  isReconnecting?: boolean;
  refreshAccount: () => Promise<void>;
};
