import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-400 to-blue-600 px-6 py-10 mt-10 text-sm text-white" data-aos="fade-up">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <p className="font-bold mb-2">Company</p>
          <ul>
          <li>
              <Link to="/about" className="hover:underline cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline cursor-pointer">
                Services
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">Community</li>
            <li className="hover:underline cursor-pointer">Testimonial</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-2">Contact</p>
          <p className="hover:text-blue-700">📞 +2764-456-7830</p>
          <p className="hover:text-blue-700">📧 support@form.com</p>
        </div>
        <div className="flex items-end md:justify-end">
          <ul className="flex gap-4">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Legal</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-xs">©2025</div>
    </footer>
  );
};

export default Footer;
