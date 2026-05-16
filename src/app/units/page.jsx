import Link from 'next/link';

export default function UnitsPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] p-8" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* الهيدر الرئيسي للوحدات */}
        <div className="text-center space-y-3 pt-8">
          <h1 className="text-4xl font-black text-white tracking-tight drop-shadow-md">خريطة المنهج</h1>
          <p className="text-slate-400 font-medium">اختر الوحدة وابدأ رحلة التعلم عبر منصة شريان الحياة</p>
        </div>

        {/* الوحدة الأولى: أصل الحياة */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-r-4 border-blue-500 pr-3">
            <h2 className="text-2xl font-black text-white bg-linear-to-l from-blue-500/10 to-transparent pl-4 py-1 rounded">
              الوحدة الأولى: أصل الحياة
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* 1. واجهة البداية */}
            <div className="bg-[#161b22] border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 group cursor-pointer">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">واجهة البداية (Unit1_Start)</h3>
                <p className="text-slate-200 text-base font-semibold leading-relaxed">
                  ادرك الطالب عظمة نهر النيل كعنصر أساسي لنشوء الحضارة المصرية واستمرار الحياة. مقدمة عن أهميته الجغرافية والتاريخية.
                </p>
              </div>
              <Link href="/unit1" className="text-blue-400 group-hover:text-blue-300 underline text-sm font-black mt-6 block text-left transition-colors">
                دخول واجهة البداية ←
              </Link>
            </div>

            {/* 2. الدرس الأول */}
            <div className="bg-[#161b22] border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 group cursor-pointer">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">الدرس الأول: الموقع والمنابع</h3>
                <p className="text-slate-200 text-base font-semibold leading-relaxed">
                  يحدد موقع نهر النيل في مصر ومنابعه الرئيسية بدقة على الخريطة (الهضبة الإثيوبية وبحيرة فيكتوريا وصولاً للمصب).
                </p>
              </div>
              <Link href="/unit1/lesson1" className="text-blue-400 group-hover:text-blue-300 underline text-sm font-black mt-6 block text-left transition-colors">
                ابدأ الدرس الأول ←
              </Link>
            </div>

            {/* 3. الدرس الثاني */}
            <div className="bg-[#161b22] border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 group cursor-pointer">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">الدرس الثاني: النيل والحضارة القديمة</h3>
                <p className="text-slate-200 text-base font-semibold leading-relaxed">
                  يربط بين وجود النهر واستقرار المصري القديم وقيام الزراعة، وشرح كيف ساعد الفيضان قديماً على ترسب الطمي.
                </p>
              </div>
              <Link href="/unit1/lesson2" className="text-blue-400 group-hover:text-blue-300 underline text-sm font-black mt-6 block text-left transition-colors">
                ابدأ الدرس الثاني ←
              </Link>
            </div>
          </div>
        </div>

        {/* الوحدة الثانية: العصر الحديث */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-2 border-r-4 border-amber-500 pr-3"><h2 className="text-2xl font-black text-white bg-linear-to-l from-amber-500/10 to-transparent pl-4 py-1 rounded">
              الوحدة الثانية: العصر الحديث
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* 1. واجهة الاستقرار */}
            <div className="bg-[#161b22] border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10 group cursor-pointer">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">واجهة الاستقرار (Unit2_Start)</h3>
                <p className="text-slate-200 text-base font-semibold leading-relaxed">
                  تمهيد ومدخل لدراسة النيل في العصر الحديث، والمشاريع الهندسية الكبرى لإدارة وتنمية الموارد المائية في مصر.
                </p>
              </div>
              <Link href="/unit2" className="text-amber-400 group-hover:text-amber-300 underline text-sm font-black mt-6 block text-left transition-colors">
                دخول واجهة البداية ←
              </Link>
            </div>

            {/* 2. الدرس الثالث */}
            <div className="bg-[#161b22] border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10 group cursor-pointer">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">الدرس الثالث: السد العالي والاستقرار</h3>
                <p className="text-slate-200 text-base font-semibold leading-relaxed">
                  يفسر دور السد العالي في حماية مصر من الفيضان والجفاف، والتحول إلى الري الدائم وتوليد الطاقة الكهرومائية.
                </p>
              </div>
              <Link href="/unit2/lesson1" className="text-amber-400 group-hover:text-amber-300 underline text-sm font-black mt-6 block text-left transition-colors">
                ابدأ الدرس الثالث ←
              </Link>
            </div>

            {/* 3. الدرس الرابع */}
            <div className="bg-[#161b22] border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10 group cursor-pointer">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">الدرس الرابع: التنمية المستدامة والوعي المائي</h3>
                <p className="text-slate-200 text-base font-semibold leading-relaxed">
                  يستنتج طرق الحفاظ على مياه النيل من التلوث، ترشيد الاستهلاك، واستعراض الأهمية الاقتصادية الحالية كالصيد والنقل.
                </p>
              </div>
              <Link href="/unit2/lesson2" className="text-amber-400 group-hover:text-amber-300 underline text-sm font-black mt-6 block text-left transition-colors">
                ابدأ الدرس الرابع ←
              </Link>
            </div>
          </div>
        </div>

        {/* بنر الاختبار التفاعلي النهائي */}
        <div className="pt-6">
          <Link href="/quiz">
            <div className="bg-linear-to-r from-blue-950/40 to-purple-950/40 border border-white/10 rounded-3xl p-8 transition-all duration-300 transform hover:scale-[1.01] hover:border-blue-500/40 text-center space-y-4 cursor-pointer group shadow-2xl">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">📝</div>
              <h3 className="text-2xl font-black text-white">الأسئلة والاختبار النهائي (Quiz)</h3>
              <p className="text-slate-200 text-base font-semibold max-w-2xl mx-auto leading-relaxed">
                يقيس مدى استيعاب المفاهيم الجغرافية والتاريخية من خلال أسئلة تفاعلية متنوعة لتثبيت المعلومات.
              </p><div className="inline-block bg-white text-black font-black px-8 py-3 rounded-full mt-2 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">
                ابدأ الاختبار النهائي الآن
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}