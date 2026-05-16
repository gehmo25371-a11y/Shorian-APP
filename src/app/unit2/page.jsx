import Link from 'next/link';

export default function Unit2Page() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] relative overflow-hidden p-8" dir="rtl">
      {/* خلفية النور الذهبي المتحرك */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* الهيدر */}
        <div className="text-center space-y-4 pt-6 animate-in fade-in slide-in-from-top-8 duration-1000">
          <Link href="/units" className="text-amber-400 hover:text-amber-300 text-sm font-bold transition-colors inline-block hover:underline">
            ← العودة لخريطة المنهج
          </Link>
          <h1 className="text-4xl md:text-5xl font-black bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            الوحدة الثانية: العصر الحديث
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-medium">
            من الطبيعة الخام إلى المعجزات الهندسية. نكتشف هنا كيف طوّع المصري الحديث النهر لحمايته وتوليد طاقة المستقبل.
          </p>
        </div>

        {/* الكروت */}
        <div className="grid md:grid-cols-2 gap-8 pt-6">
          
          {/* كارت الدرس الثالث */}
          <div className="bg-[#161b22]/70 border border-white/10 backdrop-blur-md rounded-4xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:border-amber-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] group relative overflow-hidden">
            <div className="absolute -top-10 -left-10 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">🏗️</div>
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full">الدرس الثالث</span>
              <h2 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">السد العالي والاستقرار</h2>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                رحلة بناء أعظم مشروع هندسي في القرن العشرين، وكيف أنقذ مصر من ويلات الجفاف والفيضانات المدمرة للأبد.
              </p>
              <Link href="/unit2/lesson1" className="inline-flex items-center gap-2 text-amber-400 font-black group-hover:text-amber-300 underline pt-4 transition-colors">
                ابدأ الدرس الثالث الآن <span className="group-hover:-translate-x-1.5 transition-transform">🚀</span>
              </Link>
            </div>
          </div>

          {/* كارت الدرس الرابع */}
          <div className="bg-[#161b22]/70 border border-white/10 backdrop-blur-md rounded-4xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group relative overflow-hidden">
            <div className="absolute -top-10 -left-10 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">🌱</div>
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">الدرس الرابع</span>
              <h2 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">التنمية المستدامة</h2>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                مستقبل النهر في أيدينا؛ لنتعلم طرق ترشيد الاستهلاك، منع تلوث المياه، وكيف نساهم في حماية كل قطرة من أجل الأجيال القادمة.
              </p>
              <Link href="/unit2/lesson2" className="inline-flex items-center gap-2 text-emerald-400 font-black group-hover:text-emerald-300 underline pt-4 transition-colors">
                ابدأ الدرس الرابع الآن <span className="group-hover:-translate-x-1.5 transition-transform">🚀</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}