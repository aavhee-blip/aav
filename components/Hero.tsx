
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-black text-white">
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <img 
          src="https://picsum.photos/seed/volleyball/1200/800" 
          alt="Volleyball Background" 
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-400 tracking-tight">
            선수 인생의 모든 순간을 설계하는 배구 전문 에이전시
          </h2>
          <h1 className="text-4xl md:text-7xl font-black mb-10 leading-[1.15] break-keep">
            배구에만 집중하세요,<br />
            나머지는 <span className="bg-white text-black px-2">AAV에이전시</span>가 합니다.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 font-medium leading-relaxed">
            운동, 분석, 의료, 브랜딩, 커리어까지.<br />
            당신의 성장을 위한 최적의 파트너가 되어 드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-5 bg-white text-black font-black rounded-full hover:bg-slate-200 transition-colors text-lg flex items-center justify-center">
              상담 신청하기
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="px-8 py-5 border-2 border-slate-700 text-white font-black rounded-full hover:bg-slate-800 transition-colors text-lg">
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
