import Link from 'next/link';

export default function Lesson3Page() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] p-6 md:p-12" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
        
        {/* التنقل العلوي السريع */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <Link href="/unit2" className="text-amber-400 hover:underline font-bold text-sm">
            ← العودة للوحدة الثانية
          </Link>
          <span className="bg-amber-500/10 text-amber-400 text-xs px-3 py-1 rounded-full font-black border border-amber-500/20">
            الدرس الثالث
          </span>
        </div>

        {/* عنوان الدرس */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-black text-white">السد العالي: معجزة الهندسة المصرية</h1>
          <p className="text-slate-400 font-medium">كيف تحكّم المصري الحديث في تدفق النهر وحمى بلاده من الكوارث؟</p>
        </div>

        {/* المحتوى التفاعلي */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* كارت الحماية */}
            <div className="bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-amber-500/40 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:animate-bounce">🛡️</span>
                <h4 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">الحماية من الفيضان والجفاف</h4>
              </div>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                قبل السد، كانت مصر تغرق في مواسم الفيضان، وتموت زرعاً في مواسم الجفاف. السد العالي حجز المياه الزائدة خلفه في بحيرة ناصر كأمان استراتيجي.
              </p>
            </div>

            {/* كارت الكهرباء والتنمية */}
            <div className="bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:animate-bounce">⚡</span>
                <h4 className="text-lg font-black text-white group-hover:text-orange-400 transition-colors">الطاقة الكهرومائية والري المستمر</h4>
              </div>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                ساعد السد في توليد طاقة كهربائية نظيفة شغّلت المصانع وأنارت القرى، وحوّل ري الأرض من ري موسمي إلى ري دائم طوال العام.
              </p>
            </div>

          </div>
        </div>

        {/* أزرار التنقل */}
        <div className="pt-6 flex justify-between items-center">
          <Link href="/units" className="text-slate-400 hover:text-white font-bold text-sm transition-colors">
            ← خريطة المنهج
          </Link>
          <Link href="/unit2/lesson2">
            <button className="bg-linear-to-r from-amber-600 to-orange-500 text-white font-black px-8 py-3 rounded-full hover:from-amber-500 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/10">
              الانتقال للدرس الرابع والاخير ←
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}