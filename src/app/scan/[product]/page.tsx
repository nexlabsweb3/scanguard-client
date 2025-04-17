'use client';
import { useEffect, useState } from 'react';
import { useAccount } from '@starknet-react/core';
import { useParams } from 'next/navigation';
import ProductPreview from '@/components/ProductPreview';
import Layout from '@/app/Home/layout';

export default function ScanPage() {
  const { address } = useAccount();
  const [open, setOpen] = useState<boolean>(false);
  const [openConnectedModal, setOpenConnectedModal] = useState(false);

  const toggleUserModal = () => {
    setOpenConnectedModal((prev) => !prev);
  };

  const params = useParams();
  let product = params?.product;

  useEffect(() => {
    if (product != null) {
      setOpen(true);
    }
  }, [product]);

  return (
    <Layout>
      <main className=" w-full  bg-product-overview-mobile md:bg-product-overview bg-no-repeat bg-cover bg-center pb-[80px]">
        <ProductPreview productId="product" />
        {/* {open && <ScanProduct />} */}
      </main>
    </Layout>
  );
}
