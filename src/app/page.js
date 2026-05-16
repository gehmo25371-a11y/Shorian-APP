import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] overflow-hidden relative flex flex-col justify-center items-center p-6" dir="rtl">
      
      {/* خلفية سينمائية مضيئة ومتحركة (تأثير الماء والنور) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse duration-6000"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse duration-8000"></div>
      </div>

      <div className="max-w-4xl w-full text-center space-y-12 relative z-10 my-auto">
        
        {/* قطرة الماء المتحركة بدخول ناعم */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center justify-center bg-linear-to-b from-blue-500/20 to-cyan-500/5 text-cyan-400 p-6 rounded-4xl text-5xl mb-2 border border-blue-500/30 shadow-xl shadow-blue-500/5 hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer group">
            <span className="group-hover:animate-bounce">💧</span>
          </div>
        </div>

        {/* عنوان المنصة الرئيسي بـ Gradient مطرقع ودخول تدريجي */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none">
            <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              شريان الحياة
            </span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed pt-2 px-4">
            منصة تعليمية تفاعلية تأخذك في رحلة عبر الزمن والمكان، لتكتشف عظمة نهر النيل وكيف صنع حضارة أبهرت العالم.
          </p>
        </div>

        {/* زرار "ابدأ الرحلة الآن" التفاعلي جداً */}
        <div className="animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <Link href="/units">
            <button className="relative group overflow-hidden px-12 py-4 rounded-full bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 text-white text-xl font-black transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_35px_rgba(14,165,233,0.5)] active:scale-95">
              {/* تأثير اللمعان اللي بيتحرك جوه الزرار */}
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span className="flex items-center justify-center gap-3">
                ابدأ الرحلة الآن <span className="text-2xl group-hover:-translate-x-2 transition-transform duration-300">⛵</span>
              </span>
            </button>
          </Link>
        </div>

        {/* الثلاثة أيقونات السفلية - قمة التفاعلية والحركة والخطوط المنورة */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-700">
          
          {/* الأيقونة 1: حضارة قديمة */}
          <div className="bg-[#161b22]/50 border border-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-500 transform hover:-translate-y-3 hover:bg-[#161b22] hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 group cursor-pointer">
            <div className="text-3xl mb-3 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">🏺</div>
            <h3 className="text-slate-100 text-base md:text-lg font-black transition-colors group-hover:text-amber-400">حضارة قديمة</h3>
          </div>

          {/* الأيقونة 2: وعي مائي */}<div className="bg-[#161b22]/50 border border-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-500 transform hover:-translate-y-3 hover:bg-[#161b22] hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 group cursor-pointer">
            <div className="text-3xl mb-3 transform group-hover:scale-125 group-hover:animate-pulse transition-all duration-300">💧</div>
            <h3 className="text-slate-100 text-base md:text-lg font-black transition-colors group-hover:text-blue-400">وعي مائي</h3>
          </div>

          {/* الأيقونة 3: تنمية مستدامة */}
          <div className="bg-[#161b22]/50 border border-white/5 backdrop-blur-md rounded-2xl p-5 transition-all duration-500 transform hover:-translate-y-3 hover:bg-[#161b22] hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 group cursor-pointer">
            <div className="text-3xl mb-3 transform group-hover:scale-125 group-hover:-rotate-6 transition-all duration-300">🏗️</div>
            <h3 className="text-slate-100 text-base md:text-lg font-black transition-colors group-hover:text-cyan-400">تنمية مستدامة</h3>
          </div>

        </div>

      </div>
    </div>
  );
}