import React from "react";
import { Heart, Code, Coffee } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ruslan Zapata
              </span>
            </h3>
            <p className="text-gray-400">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t.footer.quickLinks}</h4>
            <div className="space-y-2">
              {[
                { href: "#home", label: t.nav.home },
                { href: "#about", label: t.nav.about },
                { href: "#projects", label: t.nav.projects },
                { href: "#skills", label: t.nav.skills },
                { href: "#contact", label: t.nav.contact },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t.footer.contactInfo}</h4>
            <div className="space-y-2 text-gray-400">
              <p>ruslanzapata@gmail.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-400">Made with</span>
            <Heart className="h-5 w-5 text-red-500" />
            <span className="text-gray-400">and</span>
            <Code className="h-5 w-5 text-blue-500" />
            <span className="text-gray-400">fueled by</span>
            <Coffee className="h-5 w-5 text-yellow-500" />
          </div>
          <p className="text-gray-400">
            © 2024 Ruslan Zapata. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
