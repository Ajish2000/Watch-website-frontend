import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-5">
        <p className="justify-center">2025 MyWebsite. All rights reserved.</p>
         <div className="justify-center flex space-x-5 mt-4">
      <a href="#" className="hover:text-blue-600">
            <FaFacebookF size={24} />
          </a>
      <a href="#" className="hover:text-blue-600">
            <FaTwitter size={24} />
          </a>
      <a href="#" className="hover:text-blue-600">
            <FaYoutube size={24} />
          </a>
          </div>
    </footer>
  );
}
