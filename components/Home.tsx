import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import Header from './Header';

const Home: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Initial terminal content
  useEffect(() => {
    setOutput([
      'AI Website Builder Terminal v1.0',
      'Type "help" for available commands',
      '',
    ]);
  }, []);

  // Scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (command: string) => {
    const newOutput = [...output];
    newOutput.push(`> ${command}`);

    switch (command.toLowerCase()) {
      case 'help':
        newOutput.push('Available commands:');
        newOutput.push('  help        - Show this help message');
        newOutput.push('  clear       - Clear the terminal');
        newOutput.push('  build       - Start building your website');
        newOutput.push('  demo        - View a demo of the builder');
        newOutput.push('  about       - Learn more about us');
        newOutput.push('');
        break;
      case 'clear':
        setOutput(['']);
        return;
      case 'build':
        newOutput.push('Starting AI Website Builder...');
        newOutput.push('Connecting to ChatGPT API...');
        newOutput.push('✓ Connection established');
        newOutput.push('✓ Website builder initialized');
        newOutput.push('');
        newOutput.push('Please describe the website you want to build:');
        newOutput.push('> ');
        break;
      case 'demo':
        newOutput.push('Loading demo...');
        newOutput.push('✓ Rendered landing page template');
        newOutput.push('✓ Applied modern design principles');
        newOutput.push('✓ Optimized for mobile devices');
        newOutput.push('');
        newOutput.push('Demo complete. Ready for your input!');
        newOutput.push('');
        break;
      case 'about':
        newOutput.push('AI Website Builder v1.0');
        newOutput.push(
          'Revolutionary platform to create websites by chatting with AI'
        );
        newOutput.push('No coding skills required. Build in seconds.');
        newOutput.push('');
        break;
      default:
        if (command.trim() !== '') {
          newOutput.push(
            `Command not found: ${command}. Type "help" for available commands`
          );
          newOutput.push('');
        }
    }

    setOutput(newOutput);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col font-mono">
      <Header showAboutLink={true} showHomeLink={false} />

      {/* Terminal Window */}
      <main
        ref={terminalRef}
        className="flex-grow bg-black text-green-400 p-6 overflow-y-auto"
        onClick={() => document.getElementById('terminal-input')?.focus()}
      >
        <div className="max-w-4xl mx-auto">
          {/* Terminal header bar */}
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-grow text-center text-gray-500 text-sm">
              terminal - ai-website-builder
            </div>
          </div>

          {/* Terminal content */}
          <div className="bg-black border border-gray-700 rounded-lg p-4 h-[calc(100vh-180px)]">
            {output.map((line, index) => (
              <div key={index} className="mb-1">
                {line}
              </div>
            ))}

            <div className="flex items-center">
              <span className="text-green-400 mr-2">user@ai-website:~$</span>
              <input
                id="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow bg-transparent outline-none text-green-400"
                autoFocus
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
