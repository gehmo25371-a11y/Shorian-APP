import "./globals.css";

export const metadata = {
  title: "شريان الحياة | منصة النيل التعليمية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen flex flex-col pt-24">
        {/* شريط التنقل الزجاجي الداكن */}
        <nav className="fixed top-0 inset-x-0 z-50 bg(#0d1117)/80 backdrop-blur-xl border-b border-white/10 px-8 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl animate-pulse">💧</span>
            <h1 className="text-xl font-black text-white tracking-tight">شريان الحياة</h1>
          </div>
          
          <div className="flex gap-8 text-sm font-bold items-center">
            <a href="/" className="text-slate-300 hover:text-blue-400 transition-colors">الرئيسية</a>
            <a href="/about" className="text-slate-300 hover:text-blue-400 transition-colors">عن المنصة</a>
            <a href="/units" className="text-slate-300 hover:text-blue-400 transition-colors">الدروس</a>
            <a href="/quiz" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-bold transition-all shadow-md shadow-blue-600/30">
              الاختبار 📝
            </a>
          </div>
        </nav>

        {/* عرض المحتوى في المنتصف */}
        <main className="grow flex flex-col items-center justify-center pb-16">
          {children}
        </main>
      </body>
    </html>
  );
}