import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <a
              href="#"
              className="text-primary font-bold text-2xl sm:text-3xl uppercase tracking-widest hover:text-primary/80 transition-colors"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm">
              Your trusted e-commerce destination for quality products and
              exceptional service. Discover amazing deals and shop with
              confidence.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Made with ❤️ by Berrichi Mohammed
            </p>
            <a
              href="https://github.com/Carbon14-48"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Visit My Github
            </a>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:pl-8">
            {/* Important Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Important Links
              </h3>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 capitalize"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 capitalize"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <FaLocationArrow className="text-primary flex-shrink-0" />
                  <span>Oujda, East Region</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <FaMobileAlt className="text-primary flex-shrink-0" />
                  <span>+212 73 23 23 04 30</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 dark:hover:text-primary "
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 dark:hover:text-primary "
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 dark:hover:text-primary "
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-6">
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} Carbon14. All rights reserved. Built
              with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
