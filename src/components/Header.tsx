import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Projects', 'Skills', 'Awards', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-olive-900/90 backdrop-blur-sm border-b border-olive-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-accent-light">CB</a>
          
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm uppercase tracking-wider text-accent-light hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-accent-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-olive-900/95 border-t border-olive-800">
            <ul className="py-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 text-sm uppercase tracking-wider text-accent-light hover:bg-olive-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;