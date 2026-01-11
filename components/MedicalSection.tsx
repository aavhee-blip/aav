
import React from 'react';

const MedicalSection: React.FC = () => {
  return (
    <section id="medical-legal-t" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-3xl">❤️‍🩹</span>
          <h2 className="text-3xl font-black tracking-tight">Medical & Psychology</h2>
        </div>

        <h3 className="text-4xl font-black mb-16 text-center">"첫째도 건강, 둘째도 건강입니다"</h3>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Medical Support */}
          <div className="group bg-slate-50 p-10 rounded-3xl hover:bg-slate-100 transition-colors border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-black">의료 지원 시스템</h4>
              <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">🏥</span>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              부상 예방부터 수술 후 재활까지, 국내 최고의 의료진과 협력하여 선수의 최상의 컨디션을 유지합니다.
            </p>
            <div className="flex items-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-20 h-20 rounded-xl bg-slate-200 overflow-hidden mr-6 flex-shrink-0">
                <img src="https://picsum.photos/seed/doctor/200/200" alt="Doctor" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 mb-1">협력 의료기관</p>
                <h5 className="font-black text-lg">경희 의료원 (족부의 명의)</h5>
                <p className="text-sm text-slate-500">정밀 진단 및 전문 수술/재활 지원</p>
              </div>
            </div>
          </div>

          {/* Psychology Support */}
          <div className="group bg-slate-50 p-10 rounded-3xl hover:bg-slate-100 transition-colors border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-black">스포츠 심리 코칭</h4>
              <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">🧠</span>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              멘탈은 성적의 50%를 결정합니다. 슬럼프 극복과 경기 중 집중력 향상을 위해 전문 교수의 멘토링을 제공합니다.
            </p>
            <div className="flex items-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-20 h-20 rounded-xl bg-slate-200 overflow-hidden mr-6 flex-shrink-0">
                <img src="https://picsum.photos/seed/professor/200/200" alt="Professor" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 mb-1">심리 상담 고문</p>
                <h5 className="font-black text-lg">김상욱 교수</h5>
                <p className="text-sm text-slate-500">스포츠 심리 전문 맞춤형 케어</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalSection;
