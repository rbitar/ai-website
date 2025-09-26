import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="text-xl font-bold font-header">AI WEBSITE</div>
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
        </div>
      </header>

      {/* About Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-header">
          About AI Website Builder
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mb-8">
          AI Website Builder is a revolutionary platform that allows you to
          create stunning websites in seconds by simply chatting with AI. No
          coding skills required.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="bg-gray-800 p-6 rounded-lg">
            <i className="ri-brain-line text-blue-500 text-3xl mb-4"></i>
            <h2 className="text-xl font-bold text-white mb-2 font-header">
              AI-Powered
            </h2>
            <p className="text-gray-400">
              Our advanced AI understands your vision and creates a website that
              matches your requirements.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <i className="ri-flashlight-line text-blue-500 text-3xl mb-4"></i>
            <h2 className="text-xl font-bold text-white mb-2 font-header">
              Lightning Fast
            </h2>
            <p className="text-gray-400">
              Build a complete website in minutes, not weeks. Perfect for
              prototyping and quick launches.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <i className="ri-edit-box-line text-blue-500 text-3xl mb-4"></i>
            <h2 className="text-xl font-bold text-white mb-2 font-header">
              Easy Editing
            </h2>
            <p className="text-gray-400">
              Fine-tune your website with simple prompts. Make changes as easily
              as you make them.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
