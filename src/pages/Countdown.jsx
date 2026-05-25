import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Countdown() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 2);
    target.setHours(0, 0, 0, 0);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) {
        setTimer({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        clearInterval(interval);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimer({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,_rgba(255,193,96,0.16),_transparent_18%),radial-gradient(circle_at_80%_15%,_rgba(247,201,217,0.12),_transparent_16%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.06),transparent_35%)]" />

      <div className="relative z-10 grid min-h-screen gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <p className="uppercase tracking-[0.3em] text-goldSoft text-xs opacity-90">
            العد الفاخر
          </p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            الوقت المتبقي حتى عيد الأضحى
          </h2>
          <p className="max-w-2xl text-lg leading-9 text-beige/85">
            استعد للاحتفال الراقي مع عداد مفعم بالضوء والموسيقى والإحساس
            بالمناسبة.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(timer).map(([key, value]) => (
              <motion.div
                key={key}
                whileHover={{ y: -6 }}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 text-center shadow-luxe backdrop-blur-xl"
              >
                <p className="text-5xl font-semibold text-white">{value}</p>
                <span className="mt-3 block uppercase tracking-[0.22em] text-sm text-goldSoft">
                  {key === "days"
                    ? "أيام"
                    : key === "hours"
                      ? "ساعات"
                      : key === "minutes"
                        ? "دقائق"
                        : "ثوانٍ"}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative rounded-[42px] border border-white/10 bg-white/5 p-10 shadow-luxe backdrop-blur-xl">
          <div className="absolute left-0 top-0 h-36 w-36 rounded-full bg-goldSoft/15 blur-3xl" />
          <div className="space-y-6 relative">
            <div className="rounded-[32px] bg-black/20 p-6 text-center text-white/90 shadow-inner border border-white/10">
              <p className="text-lg font-semibold">نسمات العيد</p>
              <p className="mt-2 text-sm text-beige/75">
                تصميم يبعث فيك شعورًا باللحظة الاحتفالية.
              </p>
            </div>
            <div className="rounded-[32px] bg-gradient-to-br from-[#1f1713] via-[#221c1a] to-[#0b0607] p-8 text-white shadow-glow">
              <p className="text-lg uppercase tracking-[0.25em] text-goldSoft">
                إحساس موسيقي
              </p>
              <p className="mt-4 text-beige/80 leading-7">
                ألوان متحركة وظلال ناعمة توهج للأثر السينمائي.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={() => navigate("/finale")}
          className="rounded-[32px] bg-gold/90 px-8 py-4 text-lg font-semibold text-black shadow-[0_25px_65px_rgba(242,200,125,0.28)] transition hover:-translate-y-1"
        >
          النهاية المذهلة
        </button>
        <button
          onClick={() => navigate("/wishes")}
          className="rounded-[32px] border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
        >
          العودة للأمنيات
        </button>
      </div>
    </motion.section>
  );
}

export default Countdown;
