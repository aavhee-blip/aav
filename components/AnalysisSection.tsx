
import React from 'react';

const AnalysisSection: React.FC = () => {
  return (
    <section id="analysis" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-3 mb-8">
          <span className="text-3xl">🤾</span>
          <h2 className="text-3xl font-black tracking-tight">Analysis</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h3 className="text-4xl font-black mb-8 leading-tight">앞서나가기 위한 과학화 개인 분석</h3>
            <p className="text-xl text-slate-400 mb-12 italic border-l-4 border-white pl-6">
              "선수들의 경기 및 훈련 영상을 기반으로 개개인 맞춤형으로 전략분석하고 개선점을 도출합니다."
            </p>
            
            <div className="space-y-10">
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center mr-3 text-sm font-black">01</span>
                  정밀 영상 촬영 및 지원
                </h4>
                <p className="text-slate-400 pl-11">
                  전문 인력이 선수의 모든 경기를 동행하며 밀착 촬영합니다. 놓치기 쉬운 찰나의 움직임까지 기록합니다.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center mr-3 text-sm font-black">02</span>
                  AI 기반 경기 분석 및 피드백
                </h4>
                <p className="text-slate-400 pl-11">
                  촬영된 영상을 고도화된 AI 알고리즘으로 분석하여 성공률, 이동 경로, 공격 패턴 등 객관적인 수치를 제공합니다.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center mr-3 text-sm font-black">03</span>
                  계약 및 연봉 협상 전략 지원
                </h4>
                <p className="text-slate-400 pl-11">
                  데이터화된 성과 지표는 선수 가치를 증명하는 가장 확실한 도구입니다. 유리한 조건의 계약을 위한 리포트를 제공합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 h-full">
              <div className="mb-8 overflow-hidden rounded-2xl">
                <img src="https://picsum.photos/seed/analysis1/800/600" alt="AI Analysis" className="w-full object-cover opacity-80" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700 p-4 rounded-xl">
                  <p className="text-xs text-slate-400 mb-1">성공률</p>
                  <p className="text-2xl font-black text-green-400">84.5%</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-xl">
                  <p className="text-xs text-slate-400 mb-1">최대 점프</p>
                  <p className="text-2xl font-black text-blue-400">312cm</p>
                </div>
              </div>
            </div>
            {/* Float Element */}
            <div className="absolute -bottom-10 -left-10 bg-white text-black p-8 rounded-2xl shadow-2xl max-w-xs hidden xl:block">
              <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Partner Collaboration</p>
              <h5 className="text-lg font-black mb-2">3D Motion Analysis (SSTC)</h5>
              <p className="text-sm text-slate-600 leading-snug">SSTC와의 협업을 통해 관절 가동 범위부터 힘의 전달까지 과학적으로 분석합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
