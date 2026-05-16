'use client';
import { useState } from 'react';
import Link from 'next/link';

const quizData = [
  {
    question: "يمتد نهر النيل لمسافة هائلة تبلغ حوالي 6,650 كم؛ فأي من القطاعات التالية يمثل 'المصب النهائي' الذي تنتهي عنده رحلة قطرة الماء؟",
    options: [
      "بحيرة فيكتوريا في الجنوب",
      "البحر المتوسط عبر فرعي دمياط ورشيد",
      "هضبة الحبشة في الشرق",
      "بحيرة ناصر جنوب السد العالي"
    ],
    correct: 1,
    rationale: "ينتهي مسار نهر النيل في شمال مصر حيث يصب مياهه في البحر المتوسط عبر فرعي الدلتا (دمياط ورشيد)."
  },
  {
    question: "تتميز منابع نهر النيل بالثنائية (دائمة وموسمية). ما هو المنبع المسؤول عن تزويد مصر بـ 85% من المياه وجلب الطمي الخصيب خلال فصل الصيف؟",
    options: [
      "هضبة البحيرات الاستوائية",
      "بحيرة فيكتوريا",
      "هضبة الحبشة (إثيوبيا)",
      "بحر الغزال وجنوب السودان"
    ],
    correct: 2,
    rationale: "الأمطار الصيفية الغزيرة على هضبة الحبشة تنحدر عبر النيل الأزرق وعطبرة محملة بالطمي لتشكل 85% من مياه الفيضان التاريخي."
  },
  {
    question: "كيف ساهم نهر النيل بشكل مباشر في تحويل نمط حياة المصري القديم من العصر الحجري إلى بناء أول دولة مركّزة في التاريخ؟",
    options: [
      "شجعه على الاستمرار في صيد الحيوانات البرية",
      "أجبره على الهجرة إلى الصحراء الغربية بحثاً عن الواحات",
      "علمه الزراعة بفضل الطمي، مما أنتج الاستقرار وبناء القرى والمدن",
      "جعل نمط حياته يعتمد كلياً على التجارة البحرية الخارجية فقط"
    ],
    correct: 2,
    rationale: "ترسب الطمي الخصيب بعد الفيضان علّم المصري الزراعة، والزراعة تتطلب استقراراً لرعاية المحصول، مما أدى لظهور المجتمعات وتطور الحضارة."
  },
  {
    question: "أثناء دراستك للوحدة الثانية، عرفت أن السد العالي أحدث تحولاً جذرياً في نظام الري بمصر. ما المقصود بهذا التحول الهندسّي؟",
    options: [
      "التحول من الري الدائم إلى ري الحياض الموسمي",
      "التحول من ري الحياض (الموسمي) إلى الري الدائم طوال العام",
      "التحول من الاعتماد على المياه الجوفية إلى الأمطار الشتوية",
      "إلغاء قنوات الري والاعتماد على الآبار فقط"
    ],
    correct: 1,
    rationale: "بفضل تخزين المياه المستمر خلف السد، تمكنت مصر من زراعة الأرض أكثر من مرة في السنة وتنظيم توزيع المياه بشكل دائم."
  },
  {
    question: "بالإضافة إلى حماية مصر من ويلات الفيضانات المدمرة والجفاف، ما هي القيمة المضافة 'الصناعية' الكبرى التي قدمها السد العالي لنهضة مصر الحديثة؟",
    options: [
      "توليد الطاقة الكهرومائية النظيفة لتشغيل المصانع",
      "استخراج المعادن النفيسة من قاع بحيرة ناصر",
      "توفير مياه صالحة للتبريد النووي في أسوان",
      "تحويل مجرى النهر ليمر بالصحراء الشرقية"
    ],
    correct: 0,
    rationale: "اندفاع المياه عبر توربينات السد العالي سمح بتوليد طاقة كهربائية هائلة ساهمت في إنارة القرى وتأسيس المصانع الثقيلة."
  },
  {
    question: "وفقاً للبيانات الرقمية المعاصرة، يستهلك قطاع 'الزراعة' النسبة الأكبر من موارد مصر المائية بنسبة تصل لـ 80%. ما الإجراء التكنولوجي الأمثل لتحقيق التنمية المستدامة؟",
    options: [
      "زيادة ري الأراضي بالغمر لضمان تشبع التربة",
      "التوسع في استخدام أساليب الري الحديثة كالري بالتنقيط والرش",
      "إيقاف زراعة المحاصيل الاستراتيجية كالقمح نهائياً",
      "الاعتماد على تبخر المياه لتنقيقة التربة تلقائياً"
    ],
    correct: 1,
    rationale: "التقنيات الحديثة توصل المياه مباشرة لجذور النبات بكميات محسوبة، مما يوفر ملايين الأمتار المكعبة للاستخدامات الأخرى."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return;
    
    if (selectedOption === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    
    if (currentQuestion + 1 < quizData.length) {setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] flex flex-col justify-center items-center p-6 animate-in fade-in duration-700" dir="rtl">
        <div className="bg-[#161b22] border border-white/10 p-10 rounded-[2.5rem] max-w-xl w-full text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="text-6xl animate-bounce">🏆</div>
          <h1 className="text-3xl font-black text-white">نهاية الرحلة الشيقة!</h1>
          <p className="text-slate-300 text-lg font-semibold">لقد أتممت الاختبار النهائي لمنصة شريان الحياة بنجاح.</p>
          
          <div className="bg-linear-to-r from-blue-950/50 to-cyan-950/50 border border-blue-500/20 p-6 rounded-2xl">
            <span className="text-slate-400 text-sm font-bold block mb-1">النتيجة النهائية</span>
            <span className="text-4xl font-black bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {score} من {quizData.length}
            </span>
          </div>

          <div className="flex gap-4 pt-4">
            <button onClick={handleRestart} className="flex-1 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-black py-3 rounded-xl hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-[1.02]">
              إعادة الاختبار 🔄
            </button>
            <Link href="/units" className="flex-1 bg-slate-800 text-white font-black py-3 rounded-xl hover:bg-slate-700 text-center flex items-center justify-center transition-colors">
              خريطة المنهج 🗺️
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const q = quizData[currentQuestion];

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] p-6 md:p-12 flex flex-col justify-center items-center" dir="rtl">
      <div className="max-w-3xl w-full space-y-8 animate-in fade-in duration-500">
        
        {/* البار العلوي والعداد */}
        <div className="flex justify-between items-center bg-[#161b22]/60 border border-white/5 backdrop-blur-md px-6 py-4 rounded-2xl shadow-md">
          <span className="text-sm font-black text-slate-400">
            السؤال <span className="text-blue-400">{currentQuestion + 1}</span> من <span className="text-white">{quizData.length}</span>
          </span>
          <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs px-4 py-1 rounded-full font-bold">
            نقاطك الحالية: {score}
          </span>
        </div>

        {/* كارت السؤال */}
        <div className="bg-[#161b22] border border-white/10 rounded-4xl p-8 shadow-2xl space-y-6">
          <h2 className="text-xl md:text-2xl font-black text-white leading-relaxed">
            {q.question}
          </h2>

          {/* الخيارات التفاعلية */}
          <div className="space-y-4 pt-2">
            {q.options.map((option, index) => {
              let btnClass = "w-full text-right p-5 rounded-2xl border font-semibold text-base transition-all duration-300 transform flex justify-between items-center ";
              
              if (!isSubmitted) {
                btnClass += selectedOption === index 
                  ? "bg-blue-500/10 border-blue-500 text-white shadow-lg shadow-blue-500/5 scale-[1.01]" 
                  : "bg-[#0d1117]/50 border-white/5 text-slate-200 hover:border-white/20 hover:bg-[#0d1117] hover:scale-[1.01]";
              } else {
                if (index === q.correct) {
                  btnClass += "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-black";
                } else if (selectedOption === index) {
                  btnClass += "bg-rose-500/20 border-rose-500 text-rose-300";
                } else {btnClass += "bg-[#0d1117]/30 border-white/5 text-slate-500 opacity-60";
                }
              }

              return (
                <button 
                  key={index} 
                  onClick={() => handleOptionSelect(index)}
                  disabled={isSubmitted}
                  className={btnClass}
                >
                  <span>{option}</span>
                  {isSubmitted && index === q.correct && <span className="text-emerald-400 text-xl font-bold">✓</span>}
                  {isSubmitted && selectedOption === index && index !== q.correct && <span className="text-rose-400 text-xl font-bold">✗</span>}
                </button>
              );
            })}
          </div>

          {/* الفيدباك الشارح */}
          {isSubmitted && (
            <div className="bg-linear-to-r from-blue-950/40 to-slate-950/40 border border-white/5 p-5 rounded-2xl text-sm leading-relaxed text-slate-300 animate-in slide-in-from-top-4 duration-300 font-medium">
              <strong className="text-blue-400 block mb-1">💡 التفسير العلمي:</strong>
              {q.rationale}
            </div>
          )}

          {/* زر التثبيت والنقل */}
          <div className="pt-4 flex justify-end">
            {!isSubmitted ? (
              <button 
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className={`font-black px-10 py-3 rounded-full transition-all duration-300 ${selectedOption !== null ? 'bg-linear-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 shadow-lg' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
              >
                تأكيد الإجابة 🚀
              </button>
            ) : (
              <button 
                onClick={handleNext}
                className="bg-linear-to-r from-emerald-600 to-teal-500 text-white font-black px-10 py-3 rounded-full hover:scale-105 shadow-lg transition-all"
              >
                {currentQuestion + 1 === quizData.length ? "عرض النتيجة النهائية 🎉" : "السؤال التالي ←"}
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}