'use client';
import Link from 'next/link';

export default function Unit2Page() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] p-6 md:p-12" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
        
        {/* البار العلوي للتنقل السريع */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <Link href="/units" className="text-amber-400 hover:underline font-bold text-sm">
            ← العودة لخريطة الوحدات
          </Link>
          <span className="bg-amber-500/10 text-amber-400 text-xs px-3 py-1 rounded-full font-black border border-amber-500/20">
            الوحدة الثانية
          </span>
        </div>

        {/* عنوان الوحدة والوصف المطرقع */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-white bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text">
            الوحدة الثانية: النيل في مصر الحديثة والمستدامة
          </h1>
          <p className="text-slate-400 font-semibold text-base md:text-lg leading-relaxed">
            من المعجزات الهندسية الكبرى إلى حماية قطرات الحياة.. رحلتنا لحماية مستقبل شريان مصر!
          </p>
        </div>

        {/* قائمة الدروس التفاعلية */}
        <div className="grid gap-6">
          
          {/* كارت الدرس الثالث (السد العالي) */}
          <div className="bg-[#161b22] border border-white/10 rounded-4xl p-6 md:p-8 hover:border-amber-500/40 transition-all duration-300 transform hover:scale-[1.01] group flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-black text-sm">الدرس الثالث</span>
                <span className="text-xl group-hover:animate-bounce">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                السد العالي: معجزة الهندسة المصرية
              </h3>
              <p className="text-slate-400 text-sm font-medium">
                اكتشف كيف تحكّم المصري الحديث في تدفق النهر، وحمى بلاده من الفيضان والجفاف، وولّد الطاقة.
              </p>
            </div>
            <Link href="/unit2/lesson1" className="w-full md:w-auto">
              <button className="w-full bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500 hover:text-black font-black px-6 py-3 rounded-xl transition-all duration-300 text-sm">
                دخول الدرس 🚀
              </button>
            </Link>
          </div>

          {/* كارت الدرس الرابع (التنمية المستدامة) */}
          <div className="bg-[#161b22] border border-white/10 rounded-4xl p-6 md:p-8 hover:border-emerald-500/40 transition-all duration-300 transform hover:scale-[1.01] group flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-black text-sm">الدرس الرابع</span>
                <span className="text-xl group-hover:animate-bounce">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                التنمية المستدامة والوعي المائي
              </h3>
              <p className="text-slate-400 text-sm font-medium">
                مستقبل النيل في أيدينا؛ تعرف على أساليب الري الحديثة ودورنا الأخلاقي في حماية المياه.
              </p>
            </div>
            <Link href="/unit2/lesson2" className="w-full md:w-auto">
              <button className="w-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-black font-black px-6 py-3 rounded-xl transition-all duration-300 text-sm">
                دخول الدرس 🚀
              </button>
            </Link>
          </div>

        </div>

        {/* بنر تشجيعي سفلي */}
        <div className="bg-linear-to-br from-amber-950/20 to-[#161b22] border border-white/5 rounded-4xl p-8 text-center space-y-3 relative overflow-hidden">
          <span className="text-3xl block">💡</span>
          <h4 className="text-lg font-black text-white">نصيحة لك يا بطل</h4>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed font-medium">
            بعد الانتهاء من دروس هذه الوحدة، لا تنسَ التوجه مباشرة إلى الاختبار الشامل لتختبر معلوماتك وتجمع نقاطك النهائية وتنافس زملائك!
          </p>
        </div>

      </div>
    </div>
  );
}