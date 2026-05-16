import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] p-8" dir="rtl">
      <div className="max-w-5xl mx-auto space-y-16 py-12">
        
        {/* هيدر الصفحة مع أنيميشن الدخول التفاعلي */}
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="inline-block animate-bounce bg-blue-500/10 text-blue-400 p-4 rounded-full text-4xl mb-2 border border-blue-500/20">
            💧
          </div>
          <h1 className="text-5xl font-black bg-linear-to-r from-blue-400 via-cyan-300 to-amber-400 bg-clip-text text-transparent tracking-tight">
            عن منصة شريان الحياة
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            مبادرة تعليمية رقمية تهدف إلى رفع الوعي المائي وتعميق فهم جيل المستقبل بنهر النيل العظيم.
          </p>
        </div>

        {/* قسم الرؤية والرسالة - كروت تفاعلية بتتحرك وتنور مع الماوس */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* كارت الرؤية */}
          <div className="bg-[#161b22] border border-white/10 rounded-4xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 group cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl bg-blue-500/20 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">👁️‍🗨️</span>
              <h2 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">رؤيتنا</h2>
            </div>
            <p className="text-slate-200 text-base font-semibold leading-loose">
              أن نكون المنصة الرائدة في تقديم محتوى تعليمي تفاعلي يربط بين التاريخ الجغرافي العريق لنهر النيل وبين الحاضر والمستقبل الرقمي، لخلق جيل مثقف يعي قيمة كل قطرة ماء.
            </p>
          </div>

          {/* كارت الرسالة */}
          <div className="bg-[#161b22] border border-white/10 rounded-4xl p-8 transition-all duration-500 transform hover:-translate-y-3 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10 group cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl bg-amber-500/20 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">🎯</span>
              <h2 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">رسالتنا</h2>
            </div>
            <p className="text-slate-200 text-base font-semibold leading-loose">
              تبسيط المناهج المدرسية الخاصة بـ "نهر النيل" وتحويلها من نصوص صماء إلى تجربة بصرية تفاعلية مدعومة بالأسئلة والاختبارات الذكية لضمان ثبات المعلومة في أذهان الطلاب.
            </p>
          </div>
        </div>

        {/* قسم أهداف المنصة - كروت صغيرة سريعة الحركة */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-r-4 border-cyan-500 pr-3">
            <h2 className="text-2xl font-black text-white">أهدافنا الاستراتيجية</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#161b22]/60 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:bg-[#161b22] hover:border-cyan-500/40 hover:scale-[1.03] group">
              <div className="text-3xl mb-3 group-hover:animate-pulse">🗺️</div>
              <h3 className="text-lg font-bold text-white mb-2">الفهم الجغرافي</h3>
              <p className="text-slate-300 text-sm font-medium leading-relaxed">تمكين الطالب من تحديد موقع النيل ومنابعه بدقة على الخرائط التفاعلية.</p>
            </div>

            <div className="bg-[#161b22]/60 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:bg-[#161b22] hover:border-cyan-500/40 hover:scale-[1.03] group">
              <div className="text-3xl mb-3 group-hover:animate-pulse">🏗️</div>
              <h3 className="text-lg font-bold text-white mb-2">الوعي بالمشاريع</h3><p className="text-slate-300 text-sm font-medium leading-relaxed">إبراز دور المشاريع القومية كالسد العالي في تحقيق الاستقرار المائي الحديث.</p>
            </div>

            <div className="bg-[#161b22]/60 border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:bg-[#161b22] hover:border-cyan-500/40 hover:scale-[1.03] group">
              <div className="text-3xl mb-3 group-hover:animate-pulse">🌱</div>
              <h3 className="text-lg font-bold text-white mb-2">التنمية المستدامة</h3>
              <p className="text-slate-300 text-sm font-medium leading-relaxed">غرس سلوكيات ترشيد استهلاك المياه وحمايتها من التلوث لضمان حقوق الأجيال.</p>
            </div>
          </div>
        </div>

        {/* بنر تفاعلي سفلي يدعو للحركة والدخول على الدروس */}
        <div className="pt-4">
          <Link href="/units">
            <div className="bg-linear-to-r from-blue-950/30 via-[#161b22] to-amber-950/30 border border-white/10 rounded-[2.5rem] p-8 text-center space-y-4 cursor-pointer group transition-all duration-500 transform hover:scale-[1.02] hover:border-cyan-500/40 shadow-2xl">
              <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                هل أنت مستعد لبدء الرحلة؟
              </h3>
              <p className="text-slate-300 text-base font-semibold max-w-xl mx-auto leading-relaxed">
                انتقل الآن إلى خريطة المنهج واستكشف الدروس التفاعلية المدعومة بالصور والأسئلة.
              </p>
              <div className="inline-block bg-linear-to-r from-blue-600 to-cyan-500 text-white font-black px-10 py-3 rounded-full mt-2 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-blue-500/20 transform group-hover:scale-105">
                تصفح الوحدات والدروس الآن 🚀
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}