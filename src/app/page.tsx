'use client';

import ContentSection from '@/components/ContentSection';
import HeroSection from '@/components/HeroSection';
import Layout from './Home/layout';

export default function Home() {
  return (
    <Layout>
      <main className="">
        <section className="bg-mainBg bg-cover lg:pt-36 pb-5">
          <header className="container mx-auto">
            <HeroSection />
          </header>
        </section>
        <main className="">
          <ContentSection />
        </main>
      </main>
    </Layout>
  );
}
