import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface HeaderProps {
  showAboutLink?: boolean;
  showHomeLink?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  showAboutLink = true,
  showHomeLink = false,
}) => {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="text-xl font-bold font-header">AI WEBSITE</div>
      <div className="flex gap-4">
        {showAboutLink && (
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition-colors flex items-center"
          >
            About
          </Link>
        )}
        {showHomeLink && (
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
        )}
        <Button variant="secondary">Sign in</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </header>
  );
};

export default Header;
