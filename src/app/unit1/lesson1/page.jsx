import Link from 'next/link';

export default function Lesson1Page() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] p-6 md:p-12" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
        
        {/* التنقل العلوي السريع */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <Link href="/unit1" className="text-blue-400 hover:underline font-bold text-sm">
            ← العودة للوحدة الأولى
          </Link>
          <span className="bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full font-black border border-blue-500/20">
            الدرس الأول
          </span>
        </div>

        {/* عنوان الدرس منور وفاتح */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-black text-white">الموقع والمنابع الرئيسية لنهر النيل</h1>
          <p className="text-slate-400 font-medium">سنتعلم اليوم من أين ينبع المجرى المائي العظيم وكيف يصل إلى أرض مصر.</p>
        </div>

        {/* بنر الخريطة التفاعلية الفخم جداً */}
        <div className="bg-linear-to-br from-[#161b22] to-[#0d1117] border border-white/10 rounded-4xl p-8 text-center space-y-6 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-4 py-1 rounded-bl-xl font-bold">خريطة تفاعلية</div>
          <div className="w-full h-48 bg-blue-950/30 border border-blue-500/20 rounded-xl flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-500 cursor-pointer">
            <span className="text-4xl group-hover:scale-125 transition-transform duration-300">🗺️</span>
            <p className="absolute mt-20 text-slate-300 text-sm font-semibold">اضغط هنا لتكبير خريطة منابع نهر النيل</p>
          </div>
        </div>

        {/* كروت تفصيل محتوى الدرس بالخط الفاتح الواضح والحركة السلسة */}
        <div className="space-y-6">
          <h3 className="text-xl font-black text-white border-r-4 border-blue-500 pr-2">أقسام المنابع الرئيسية:</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* المنبع الاستوائي */}
            <div className="bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:animate-bounce">🏔️</span>
                <h4 className="text-lg font-black text-white group-hover:text-blue-400 transition-colors">المنابع الاستوائية (الدائمة)</h4>
              </div>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                تتمثل في هضبة البحيرات الاستوائية وتعد بحيرة فيكتوريا هي المصدر الرئيسي والمنبع الدائم الذي يمد النيل بالمياه طوال فترات العام دون انقطاع.
              </p>
            </div>

            {/* المنبع الحبشي */}
            <div className="bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl group-hover:animate-bounce">🌋</span>
                <h4 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors">المنابع الحبشية (الموسمية)</h4>
              </div>
              <p className="text-slate-200 text-base font-semibold leading-relaxed">
                تتمثل في هضبة الحبشة (إثيوبيا) وينبع منها النيل الأزرق و**نهر عطبرة**، وتتميز بأنها موسمية تمد النيل بمعظم مياهه (85%) خلال فصل الصيف وهو سر الفيضان القديم.
              </p>
            </div>

          </div>
        </div>

        {/* زر الانتقال التفاعلي للدرس التالي */}
        <div className="pt-6 flex justify-end">
          <Link href="/unit1/lesson2"><button className="bg-linear-to-r from-blue-600 to-cyan-500 text-white font-black px-8 py-3 rounded-full hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/10">
              الانتقال إلى الدرس الثاني (النيل والحضارة) ←
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}