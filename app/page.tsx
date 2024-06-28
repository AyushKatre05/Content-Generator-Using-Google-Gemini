"use client"
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Home = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
      <div>
        <div className='text-center'>AI Content Generator</div>
        <div>Generate high-quality content effortlessly with our AI-powered tool </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-5xl font-bold mt-4">AI Content Generator</h1>
        <p className="text-lg mt-2 text-center max-w-2xl">
          Welcome to the AI Content Generator, your ultimate solution for creating high-quality content effortlessly. 
          Our advanced AI technology helps you generate unique, engaging, and SEO-friendly content in seconds.
        </p>
        <p className="text-lg mt-2 text-center max-w-2xl">
          Whether you need blog posts, articles, marketing copy, or social media content, our tool is designed to meet your needs. 
          Simply input your requirements, and let our AI do the rest. Save time and focus on what matters most – growing your business.
        </p>
        <p className="text-lg mt-2 text-center max-w-2xl">
          Our AI Content Generator is perfect for content creators, marketers, and businesses looking to scale their content production. 
          With our easy-to-use interface, you can customize your content to match your brands voice and style.
        </p>
        <Button 
          onClick={handleGetStarted} 
          className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transform hover:scale-105 transition-transform duration-300"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Home;
