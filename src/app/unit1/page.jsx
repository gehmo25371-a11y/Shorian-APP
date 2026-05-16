import Link from 'next/link';

export default function Unit1Page() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] relative overflow-hidden p-8" dir="rtl">
      {/* خلفية النور الأزرق المتحرك */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* الهيدر بتأثير الغسق النيلي */}
        <div className="text-center space-y-4 pt-6 animate-in fade-in slide-in-from-top-8 duration-1000">
          <Link href="/units" className="text-blue-400 hover:text-blue-300 text-sm font-bold transition-colors inline-block hover:underline">
            ← العودة لخريطة المنهج
          </Link>
          <h1 className="text-4xl md:text-5xl font-black bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            الوحدة الأولى: أصل الحياة
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-medium">
            مرحباً بك في بداية الرحلة! هنا نكتشف كيف كان نهر النيل سبباً في نشوء أعظم حضارة على وجه الأرض منذ فجر التاريخ.
          </p>
        </div>

        {/* كروت الدروس التفاعلية جداً */}
        <div className="grid md:grid-cols-2 gap-8 pt-6">
          
          {/* كارت الدرس الأول */}
          <div className="bg-[#161b22]/70 border border-white/10 backdrop-blur-md rounded-4xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group relative overflow-hidden">
            <div className="absolute -top-10 -left-10 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">🗺️</div>
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">الدرس الأول</span>
              <h2 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">الموقع والمنابع</h2>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                سنتتبع معاً مسار النهر من هضبة البحيرات الاستوائية وهضبة الحبشة، وصولاً للمصب في الدلتا المصرية لنعرف من أين تأتي قطرة الماء.
              </p>
              <Link href="/unit1/lesson1" className="inline-flex items-center gap-2 text-blue-400 font-black group-hover:text-blue-300 underline pt-4 transition-colors">
                ابدأ الدرس الأول الآن <span className="group-hover:-translate-x-1.5 transition-transform">🚀</span>
              </Link>
            </div>
          </div>

          {/* كارت الدرس الثاني */}
          <div className="bg-[#161b22]/70 border border-white/10 backdrop-blur-md rounded-4xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group relative overflow-hidden">
            <div className="absolute -top-10 -left-10 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">🏛️</div>
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">الدرس الثاني</span>
              <h2 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">النيل والحضارة القديمة</h2>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                كيف تحول المصري القديم من حياة الترحال إلى الاستقرار بفضل الطمي والفيضان؟ اكتشف أسرار الزراعة وبناء المدن الفرعونية.
              </p>
              <Link href="/unit1/lesson2" className="inline-flex items-center gap-2 text-cyan-400 font-black group-hover:text-cyan-300 underline pt-4 transition-colors">
                ابدأ الدرس الثاني الآن <span className="group-hover:-translate-x-1.5 transition-transform">🚀</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}