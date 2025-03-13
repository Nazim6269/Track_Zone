// src/components/Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">ClockApp</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="bg-blue-700 space-y-4 p-4">
            <li>
              <a href="#" className="block hover:text-gray-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-200 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-200 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
