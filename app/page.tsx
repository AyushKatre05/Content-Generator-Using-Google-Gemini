"use client"
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Button } from '@/components/ui/button';

const Home = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>AI Content Generator</title>
        <meta name="description" content="Generate high-quality content effortlessly with our AI-powered tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mt-4">AI Content Generator</h1>
        <p className="text-gray-600 mt-2 text-center max-w-2xl">
          Welcome to the AI Content Generator, your ultimate solution for creating high-quality content effortlessly. 
          Our advanced AI technology helps you generate unique, engaging, and SEO-friendly content in seconds.
        </p>
        <p className="text-gray-600 mt-2 text-center max-w-2xl">
          Whether you need blog posts, articles, marketing copy, or social media content, our tool is designed to meet your needs. 
          Simply input your requirements, and let our AI do the rest. Save time and focus on what matters most – growing your business.
        </p>
        <p className="text-gray-600 mt-2 text-center max-w-2xl">
          Our AI Content Generator is perfect for content creators, marketers, and businesses looking to scale their content production. 
          With our easy-to-use interface, you can customize your content to match your brand's voice and style.
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
