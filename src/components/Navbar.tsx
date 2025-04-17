'use client';

import { BrandImage } from '@/assets/landing-page';
import Link from 'next/link';
import ConnectWallet from './ConnectWallet';
import { roboto } from '@/app/fonts';
import { useArgentAccount } from '@/app/hooks/argentSDKWallet/useArgentAccount';
import ProfileBar from './profile/ProfileBar';

const NavBar = (props: any) => {
  const { address, account } = useArgentAccount();

  console.log(account, address)

  return (
    <nav
      className={`flex items-center justify-between px-4 lg:px-20
        xl:px-0 2xl:px-0 py-4 mb-4 container mx-auto font-roboto
        bg-[#1e1e1e]/80 backdrop-blur-sm sticky top-0 z-10
        lg:absolute lg:left-[50%] lg:right-[50%] lg:bg-transparent lg:-translate-x-[50%] lg:pt-10`}
      {...props}
    >
      <div className="flex items-center gap-14">
        <Link href="/">
          <div className="hidden md:block">
            <BrandImage />
          </div>
        </Link>
        <NavLinks />
      </div>
      <div>
        {address ? (
          <ProfileBar address={address} disconnect={() => {}} />
        ) : (
          <ConnectWallet />
        )}
      </div>
    </nav>
  );
};

const navItems = [
  { name: 'Manufacturer', route: '/manufacturer/account' },
  { name: 'Contact', route: '/contact' },
];

const NavLinks = () => (
  <ul
    className={`${roboto.variable} text-sm text-textPrimary-light dark:text-textPrimary leading-normal
      font-roboto uppercase hidden py-3 gap-6 items-center lg:flex`}
  >
    {navItems.map((item, index) => (
      <li
        key={item.route}
        className={`${index !== navItems.length - 1 ? 'border-r-2 border-primary/[.12] pr-6' : ''}
          `}
      >
        <Link href={item.route}>{item.name}</Link>
      </li>
    ))}
  </ul>
);
export default NavBar;
