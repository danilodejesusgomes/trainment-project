import React from 'react';

const NavigationBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white font-bold">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white font-bold">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white font-bold">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;