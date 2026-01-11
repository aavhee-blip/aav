
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navData = [
    {
      title: 'ABOUT',
      items: ['About AAV', 'AAV Education', 'AAV Equipment']
    },
    {
      title: 'PLAYERS',
      items: ['Players']
    },
    {
      title: 'SERVICES',
      items: ['Training', 'Analysis', 'Branding & Sponsor', 'Medical / Legal / T...']
    },
    {
      title: 'CONTACT',
      items: ['Contact']
    }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-24 md:h-32 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="text-4xl font-black tracking-tighter italic leading-none">AAV</span>
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Agency</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navData.map((group) => (
            <div key={group.title} className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 mb-4 tracking-widest">{group.title}</span>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/\//g, '').replace(/ /g, '-').split('.')[0]}`}
                      className="text-sm font-semibold text-slate-700 hover:text-black hover:bg-slate-100 px-3 py-1.5 rounded-md transition-all inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA for Mobile/Small tablets */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-6 shadow-xl">
          {navData.map((group) => (
            <div key={group.title} className="mb-6">
              <span className="text-xs font-bold text-slate-400 mb-2 block">{group.title}</span>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                      className="text-base font-medium text-slate-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
