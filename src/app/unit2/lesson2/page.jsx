import Link from 'next/link';

export default function Lesson4Page() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] p-6 md:p-12" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
        
        {/* التنقل العلوي السريع */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <Link href="/unit2" className="text-emerald-400 hover:underline font-bold text-sm">
            ← العودة للوحدة الثانية
          </Link>
          <span className="bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1 rounded-full font-black border border-emerald-500/20">
            الدرس الرابع والأخير
          </span>
        </div>

        {/* عنوان الدرس */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-black text-white">التنمية المستدامة والوعي المائي</h1>
          <p className="text-slate-400 font-medium">مستقبل نهر النيل في أيدينا؛ كيف نحمي قطرات الحياة؟</p>
        </div>

        {/* المحتوى التفاعلي */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* كارت الأهمية الاقتصادية الحالية */}
            <div className="bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:animate-bounce">🐟</span>
                <h4 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors">الأهمية الاقتصادية</h4>
              </div>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                يعد النيل مصدراً رئيساً للثروة السمكية في مصر، وشرياناً حيوياً للنقل المائي الداخلي، بالإضافة لكونه ركيزة أساسية للسياحة النيلية.
              </p>
            </div>

            {/* كارت ترشيد الاستهلاك وحماية النهر */}
            <div className="bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-teal-500/40 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:animate-bounce">🌱</span>
                <h4 className="text-lg font-black text-white group-hover:text-teal-400 transition-colors">ترشيد الاستهلاك وحماية النهر</h4>
              </div>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                لحماية مستقبلنا يجب استخدام تكنولوجيا الري الحديثة (كالري بالتنقيط)، ومنع إلقاء المخلفات المصنعة أو الزراعية في مجرى النهر تماماً.
              </p>
            </div>

          </div>

          {/* بنر الاختبار النهائي الحماسي */}
          <div className="bg-linear-to-br from-emerald-950/20 to-[#161b22] border border-emerald-500/20 rounded-4xl p-8 text-center space-y-4 shadow-2xl relative overflow-hidden group">
            <span className="text-4xl block group-hover:scale-125 transition-transform duration-300">📝</span>
            <h3 className="text-xl font-black text-white">لقد أتممت دراسة المنهج بنجاح!</h3>
            <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">
              الآن حان الوقت لتختبر معلوماتك وتثبت استيعابك لكل ما تعلمته عن شريان الحياة في الاختبار التفاعلي الشامل.
            </p>
            <Link href="/quiz" className="inline-block bg-emerald-500 text-black font-black px-8 py-3 rounded-full mt-2 hover:bg-emerald-400 transition-all duration-300 shadow-md">
              دخول الاختبار النهائي 🚀
            </Link>
          </div>
        </div>

        {/* أزرار التنقل */}
        <div className="pt-6 flex justify-start">
          <Link href="/unit2/lesson1" className="text-slate-400 hover:text-white font-bold text-sm transition-colors">
            ← الدرس السابق
          </Link>
        </div>

      </div>
    </div>
  );
}