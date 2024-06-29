"use client"
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col items-center">
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold">AI Content Generator</h1>
        <p className="mt-4 text-lg">Generate high-quality content effortlessly with our AI-powered tool</p>
      </div>

      <div className="w-full flex flex-col items-center justify-center px-4 py-8">
        <h2 className="text-4xl font-bold mt-4">Welcome to the AI Content Generator</h2>
        <p className="text-lg mt-2 text-center max-w-2xl">
          Your ultimate solution for creating high-quality content effortlessly. Our advanced AI technology helps you generate unique, engaging, and SEO-friendly content in seconds.
        </p>
        <p className="text-lg mt-2 text-center max-w-2xl">
          Whether you need blog posts, articles, marketing copy, or social media content, our tool is designed to meet your needs. Simply input your requirements, and let our AI do the rest. Save time and focus on what matters most growing your business.
        </p>
        <p className="text-lg mt-2 text-center max-w-2xl">
          Our AI Content Generator is perfect for content creators, marketers, and businesses looking to scale their content production. With our easy-to-use interface, you can customize your content to match your brands voice and style.
        </p>
        <Button 
          onClick={handleGetStarted} 
          className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transform hover:scale-105 transition-transform duration-300"
        >
          <Link href={'/dashboard'}>Get Started</Link>
        </Button>
      </div>

      <section className="w-full py-12 px-4">
        <h2 className="text-4xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">AI-Powered Content</h3>
            <p className="text-lg">
              Generate content that is unique, engaging, and optimized for SEO. Our AI ensures that your content stands out.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Easy Customization</h3>
            <p className="text-lg">
              Customize your content to match your brands voice and style with our easy-to-use interface.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Time-Saving</h3>
            <p className="text-lg">
              Save time on content creation and focus on what matters most growing your business.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h2 className="text-4xl font-bold text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Step 1: Input Requirements</h3>
            <p className="text-lg">
              Enter the details and requirements for the content you need.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Step 2: Generate Content</h3>
            <p className="text-lg">
              Our AI generates high-quality content based on your input.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Step 3: Review and Publish</h3>
            <p className="text-lg">
              Review the generated content and make any necessary edits before publishing.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 px-4">
        <h2 className="text-4xl font-bold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg italic">
              This tool has revolutionized my content creation process. The AI-generated content is always high-quality and saves me so much time.
            </p>
            <p className="mt-4 font-bold">- Jane Doe, Content Creator</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg italic">
              I was skeptical at first, but the AI Content Generator exceeded my expectations. It is an invaluable tool for any marketer.
            </p>
            <p className="mt-4 font-bold">- John Smith, Marketing Manager</p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 px-4">
        <h2 className="text-4xl font-bold text-center">FAQs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">How does the AI generate content?</h3>
            <p className="text-lg">
              Our AI uses advanced machine learning algorithms to analyze your input and generate unique content based on your requirements.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Is the content SEO-friendly?</h3>
            <p className="text-lg">
              Yes, the AI generates content that is optimized for search engines, helping you improve your search engine rankings.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Can I customize the content?</h3>
            <p className="text-lg">
              Absolutely! You can customize the content to match your brands voice and style using our easy-to-use interface.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">What types of content can the AI generate?</h3>
            <p className="text-lg">
              The AI can generate a variety of content types, including blog posts, articles, marketing copy, social media content, and more.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">How secure is my data?</h3>
            <p className="text-lg">
              We take data security seriously. All your data is encrypted and stored securely. We do not share your data with third parties.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        <div className="mt-8 max-w-2xl mx-auto text-center">
          <p className="text-lg">
            Have any questions or need support? Get in touch with us, and we will be happy to assist you.
          </p>
          <Button 
            onClick={() => router.push('/contact')}
            className="mt-6 px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-lg"
          >
            Contact Us
          </Button>
        </div>
      </section>

      <footer className="w-full py-8 px-4 bg-indigo-700 text-center text-white">
        <p>&copy; 2024 AI Content Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
