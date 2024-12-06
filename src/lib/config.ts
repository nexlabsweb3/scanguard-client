export const CONTRACT_ADDR =
  '0x77d35c666955199a1ebf7424089f29f48a635b349a95614a763a63d62f61779';

export const formatAddress = (addr: string) => {
  return addr.replace(/^0x/, '0x0');
};

export const formatIpfsHash = (hash: string) => {
  return hash.replace(/,/g, '');
};

export const formatDate = (date: string) =>
  date.split('-').reverse().join('. ');
