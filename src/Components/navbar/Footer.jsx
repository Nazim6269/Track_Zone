// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Logo / Brand */}
          <div className="text-2xl font-bold">ClockApp</div>

          {/* Center - Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Right side - Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ClockApp. All Rights Reserved By
            NazimUddin.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
