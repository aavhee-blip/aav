
import React from 'react';

const CareerSection: React.FC = () => {
  return (
    <section id="career" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-3xl">💼</span>
          <h2 className="text-3xl font-black tracking-tight">Career Management</h2>
        </div>

        <div className="mb-20">
          <h3 className="text-5xl font-black mb-8 leading-tight">귀찮고 어려운 일은<br /><span className="text-slate-500">AAV</span>가 다 알아서 합니다.</h3>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            운동에만 집중할 수 있는 환경을 만듭니다. 법률 분쟁, 세무 관리 등 선수가 직접 처리하기 어려운 전문적인 영역을 케어합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tax Service */}
          <div className="flex flex-col md:flex-row items-center md:items-start p-8 bg-slate-900 rounded-3xl border border-slate-800">
            <div className="w-32 h-32 rounded-2xl overflow-hidden bg-slate-800 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <img src="https://picsum.photos/seed/tax/300/300" alt="Tax Accountant" className="w-full h-full object-cover grayscale" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-white text-black text-xs font-black rounded-md mb-4">TAX ADVISOR</div>
              <h4 className="text-2xl font-black mb-2">정수진 세무사</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                선수 생활 중 발생하는 복잡한 세무 관리, 절세 전략, 그리고 사업화 과정의 회계 자문을 담당합니다.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• 스포츠 선수 전문 세무 컨설팅</li>
                <li>• 소득세 신고 및 절세 플래닝</li>
              </ul>
            </div>
          </div>

          {/* Legal Service */}
          <div className="flex flex-col md:flex-row items-center md:items-start p-8 bg-slate-900 rounded-3xl border border-slate-800">
            <div className="w-32 h-32 rounded-2xl overflow-hidden bg-slate-800 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <img src="https://picsum.photos/seed/law/300/300" alt="Lawyer" className="w-full h-full object-cover grayscale" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-white text-black text-xs font-black rounded-md mb-4">LEGAL COUNSEL</div>
              <h4 className="text-2xl font-black mb-2">김병직 변호사</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                계약서 검토, 초상권 보호, 법률 분쟁 대응 등 선수의 권익을 보호하기 위한 전방위적 법률 서비스를 제공합니다.
              </p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• 김병직 법률사무소 대표</li>
                <li>• 전속 계약 및 스폰서십 법률 검토</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
