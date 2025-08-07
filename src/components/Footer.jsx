import { Mail, MapPin, Phone } from 'lucide-react'; // optional icons

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 text-center md:text-left">
          
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Bernardhub</h2>
            <p className="text-sm text-gray-300">
              Helping you find the React job that fits your skills and goals.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/jobs" className="hover:underline">Jobs</a></li>
              <li><a href="/add-job" className="hover:underline">Add Job</a></li>
              <li><a href="/login" className="hover:underline">Login</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
            <p className="text-sm text-gray-300 mb-4">
              Join our newsletter to stay updated.
            </p>
            <form className="flex flex-col sm:flex-row items-center sm:items-stretch space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-md text-black"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-indigo-700 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@bernardhub.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +234 7059210213
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-600 pt-6 pb-4 text-sm flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Bernardhub. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0 flex space-x-4 text-white text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">📘</a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">🐦</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">💼</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
