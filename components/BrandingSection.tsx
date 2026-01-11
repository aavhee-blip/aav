
import React from 'react';

const BrandingSection: React.FC = () => {
  return (
    <section id="branding-sponsor" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-3xl">🏅</span>
          <h2 className="text-3xl font-black tracking-tight">Branding & Sponsor</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-3xl font-black mb-6">선수 개인 브랜딩</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              경기력만큼 중요한 것이 팬들과의 소통과 브랜드 가치입니다. AAV는 선수의 고유한 매력을 발견하고 디지털 채널을 통해 가치를 높입니다.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="group">
                <div className="aspect-video rounded-2xl bg-slate-900 mb-4 overflow-hidden relative">
                  <img src="https://picsum.photos/seed/youtube/400/225" alt="YouTube" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <h4 className="font-bold">YouTube Channel</h4>
                <p className="text-sm text-slate-500">콘텐츠 기획, 촬영 및 편집</p>
              </div>
              <div className="group">
                <div className="aspect-video rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 mb-4 overflow-hidden relative">
                  <img src="https://picsum.photos/seed/insta/400/225" alt="Instagram" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-white text-3xl">📸</span>
                  </div>
                </div>
                <h4 className="font-bold">Instagram Management</h4>
                <p className="text-sm text-slate-500">비주얼 브랜딩 및 팬 매니지먼트</p>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black mb-6">스폰서 및 광고 에이전시</h3>
              <p className="text-slate-400 mb-10 leading-relaxed">
                전문적인 대응팀이 브랜드 가치에 맞는 최적의 스폰서십을 유치합니다. 체계적인 수수료 체계로 선수의 수익을 극대화합니다.
              </p>
              
              <div className="space-y-6">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-slate-400">인바운드 광고 (직접 연락)</span>
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-black">5% FEE</span>
                  </div>
                  <p className="text-sm text-slate-500">선수를 통해 브랜드에서 먼저 연락이 오는 경우</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-slate-400">아웃바운드 (에이전시 유치)</span>
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-black">20% FEE</span>
                  </div>
                  <p className="text-sm text-slate-500">에이전시가 기획하여 스폰서를 직접 유치한 경우</p>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-slate-500 mt-8">※ 현재 대응팀 구성 및 시스템 구축 단계에 있습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
