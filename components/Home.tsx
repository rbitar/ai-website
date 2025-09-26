import React from 'react';
import Button from './Button';
import Header from './Header';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header showAboutLink={true} showHomeLink={false} />

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <div className="inline-flex items-center justify-center gap-2 bg-gray-800 rounded-full px-4 py-2 mb-8">
          <i className="ri-openai-fill text-white text-lg"></i>
          <span className="text-gray-300">Powered by ChatGPT</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl font-header">
          AI Website Builder
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
          Revolutionary new way to launch your website in seconds, by chatting
          with AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" className="text-lg px-8 py-4">
            Start Building
          </Button>
          <Button variant="secondary" className="text-lg px-8 py-4">
            View Demo
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
