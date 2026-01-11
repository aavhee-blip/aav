
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-black tracking-tighter italic leading-none">AAV</span>
              <span className="text-[8px] font-bold tracking-widest text-slate-500 uppercase">Agency</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed break-keep">
              배구 선수의 전문적인 성장을 돕는 No.1 에이전시. 우리는 선수의 미래를 함께 설계하고 함께 성장합니다.
            </p>
          </div>
          
          <div>
            <h5 className="font-black text-sm mb-6 uppercase tracking-widest text-slate-400">Services</h5>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li><a href="#training" className="hover:text-black">Professional Training</a></li>
              <li><a href="#analysis" className="hover:text-black">Performance Analysis</a></li>
              <li><a href="#branding-sponsor" className="hover:text-black">Personal Branding</a></li>
              <li><a href="#medical-legal-t" className="hover:text-black">Health & Support</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-sm mb-6 uppercase tracking-widest text-slate-400">Inquiry</h5>
            <ul className="space-y-4 text-sm font-bold text-slate-600">
              <li>상담 신청</li>
              <li>제휴 문의</li>
              <li>채용 공고</li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-sm mb-6 uppercase tracking-widest text-slate-400">Contact</h5>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center">
                <span className="w-5 h-5 flex items-center justify-center mr-2">📍</span>
                서울특별시 마포구 (AAV HQ)
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 flex items-center justify-center mr-2">📞</span>
                02-XXX-XXXX
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 flex items-center justify-center mr-2">✉️</span>
                contact@aav-agency.com
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-slate-200 gap-6">
          <p className="text-xs text-slate-400">© 2025 AAV Agency. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-black transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-black transition-colors">
              <span className="sr-only">YouTube</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
