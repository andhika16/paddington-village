import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-blue-400">RumahAsri</h2>
          <p className="text-sm text-gray-300">
            Temukan rumah impian Anda bersama kami. Hunian nyaman dan aman untuk masa depan Anda.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-semibold mb-2">Navigasi</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/" className="hover:text-white">Beranda</Link></li>
            <li><Link to="/properties" className="hover:text-white">Properti</Link></li>
            <li><Link to="/about" className="hover:text-white">Tentang Kami</Link></li>
            <li><Link to="/contact" className="hover:text-white">Kontak</Link></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-semibold mb-2">Kontak</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>📍 Jl. Perumahan Damai No. 88</li>
            <li>📞 0852-1234-5678</li>
            <li>✉️ info@rumahasri.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} RumahAsri. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
