import { Link } from "react-router-dom";

const Footer = () => {
  return (
 <footer className="bg-teal-700 text-gray-300 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">

 
  <div>
 <h2 className="text-2xl font-bold text-white mb-3">
RoamWithUs
 </h2>
 <p className="text-sm leading-relaxed">
Discover Uttarakhand with comfort and confidence.
Plan, book, and roam with us.
 </p>
  </div>
  <div>
 <h3 className="text-lg font-semibold text-white mb-4">
Quick Links
 </h3>
 <ul className="space-y-2">
<li>
  <Link to="/" className="hover:text-white transition">
 Home
  </Link>
</li>
<li>
  <Link to="/login" className="hover:text-white transition">
    Login
  </Link>
</li>
 </ul>
  </div>

  <div>
 <h3 className="text-lg font-semibold text-white mb-4">
Support
 </h3>
 <ul className="space-y-2">
<li className="hover:text-white transition cursor-pointer">
  FAQs
</li>
<li className="hover:text-white transition cursor-pointer">
  Privacy Policy
</li>
<li className="hover:text-white transition cursor-pointer">
  Terms & Conditions
</li>
<li className="hover:text-white transition cursor-pointer">
  Help Center
</li>
 </ul>
  </div>

  <div>
 <h3 className="text-lg font-semibold text-white mb-4">
Contact Us
 </h3>
 <ul className="space-y-2 text-sm">
<li>📍 Uttarakhand, India</li>
<li>📞 +91 987XX XXXXX</li>
<li>✉️ support@weroam.com</li>
 </ul>
  </div>

</div>

<div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
  © {new Date().getFullYear()} WeRoam. All rights reserved.
</div>
 </footer>
  );
};

export default Footer;