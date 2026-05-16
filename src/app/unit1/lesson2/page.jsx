import Link from 'next/link';

export default function Lesson2Page() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] p-6 md:p-12" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
        
        {/* التنقل العلوي السريع */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <Link href="/unit1" className="text-cyan-400 hover:underline font-bold text-sm">
            ← العودة للوحدة الأولى
          </Link>
          <span className="bg-cyan-500/10 text-cyan-400 text-xs px-3 py-1 rounded-full font-black border border-cyan-500/20">
            الدرس الثاني
          </span>
        </div>

        {/* عنوان الدرس */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-black text-white">نهر النيل ونشوء الحضارة المصرية القديمة</h1>
          <p className="text-slate-400 font-medium">كيف تحول المصري القديم من التنقل إلى الاستقرار وبناء المجد؟</p>
        </div>

        {/* كروت الشرح التفاعلية */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* كارت حياة التنقل */}
            <div className="bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:animate-bounce">🏹</span>
                <h4 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors">حياة الهضاب والتنقل</h4>
              </div>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                عاش المصري القديم في البداية فوق الهضاب معتمداً على جمع الثمار وصيد الحيوانات، وكانت حياته غير مستقرة وتتأثر بالجفاف.
              </p>
            </div>

            {/* كارت سر الطمي والزراعة */}
            <div className="bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:animate-bounce">🌾</span>
                <h4 className="text-lg font-black text-white group-hover:text-blue-400 transition-colors">النزول للوادي والزراعة</h4>
              </div>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                بعد حلول الجفاف، نزل المصري إلى وادي النيل، فتعلم زراعة الأرض بفضل الطمي الخصيب الذي جلبه الفيضان، وبنى بيوته واستقر.
              </p>
            </div>

          </div>

          {/* بنر استقرار الإنسان والزراعة */}
          <div className="bg-linear-to-br from-[#161b22] to-[#0d1117] border border-white/10 rounded-4xl p-8 text-center space-y-4 shadow-2xl relative overflow-hidden group">
            <span className="text-4xl block group-hover:scale-125 transition-transform duration-300">🏛️</span>
            <h3 className="text-xl font-black text-white">معادلة قيام الحضارة</h3>
            <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
              الاستقرار أنتج القرى، ثم المدن، وأتاح للمصري القديم الوقت لابتكار الكتابة، الهندسة، الحساب، وبناء الأهرامات والمعابد التي أبهرت العالم.
            </p>
          </div>
        </div>

        {/* أزرار التنقل */}
        <div className="pt-6 flex justify-between items-center">
          <Link href="/unit1/lesson1" className="text-slate-400 hover:text-white font-bold text-sm transition-colors">
            ← الدرس السابق
          </Link>
          <Link href="/units">
            <button className="bg-linear-to-r from-cyan-600 to-blue-500 text-white font-black px-8 py-3 rounded-full hover:from-cyan-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              العودة لخريطة الوحدات 🗺️
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}