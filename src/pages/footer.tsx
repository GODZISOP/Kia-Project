import React from "react";

interface FooterProps {
  onNavigate: (page: "home" | "about" | "services" | "contact") => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-amber-400 to-stone-400 bg-clip-text text-transparent">
              Kia
            </h3>
            <div className="space-y-3 text-neutral-400">
              <p className="hover:text-amber-400 transition-colors cursor-pointer">
                The Female Veterans Podcast
              </p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">
                Hot Topics Live Podcast
              </p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">
                Magnum Opus Multimedia
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => onNavigate("home")}
                className="block hover:text-amber-400 transition-colors hover:translate-x-1 transform duration-200"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="block hover:text-amber-400 transition-colors hover:translate-x-1 transform duration-200"
              >
                About
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="block hover:text-amber-400 transition-colors hover:translate-x-1 transform duration-200"
              >
                Services
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="block hover:text-amber-400 transition-colors hover:translate-x-1 transform duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact / Connect Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Connect</h3>
            <div className="space-y-3 text-neutral-400">
              <p className="hover:text-amber-400 transition-colors">Ph: 971-266-0104</p>
              <p className="hover:text-amber-400 transition-colors cursor-pointer">
                www.thefemaleveteranspodcast.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-sm text-neutral-500">
            © 2025 Self-Sabotage Alchemy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
