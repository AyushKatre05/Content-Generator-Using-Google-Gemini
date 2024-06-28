"use client"
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Home = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Interview Preparation App</title>
        <meta name="description" content="Prepare for your interviews with ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center px-4 py-8">
        <Image
          src="/images/interview-prep.png"
          alt="Interview Preparation"
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-4">Interview Preparation App</h1>
        <p className="text-gray-600 mt-2 text-center">
          Ace your interviews with our comprehensive preparation resources.
        </p>
        <Button 
          onClick={handleGetStarted} 
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Button>
      </main>
    </div>
  );
};

export default Home;
