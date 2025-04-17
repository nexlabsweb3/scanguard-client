import { roboto } from '@/app/fonts';
import { WalletIcon } from '@heroicons/react/24/outline';
import { useArgentConnect } from '@/app/hooks/argentSDKWallet/useArgentConnect';

const ConnectWallet = (props: any) => {
  const { connect } = useArgentConnect();

  return (
    <div>
      <button
        onClick={connect}
        className={` flex items-center  py-3 px-[1.25rem]
          place-items-center rounded-full gap-2 text-textPrimary
          font-medium text-base bg-primary ${roboto.variable} font-roboto`}
        {...props}
      >
        <div>
          <WalletIcon className="text-white w-6 h-6" />
        </div>
        CONNECT WALLET
      </button>
    </div>
  );
};

export default ConnectWallet;
