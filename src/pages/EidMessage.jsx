import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const lines = [
  "أتمنى لك سعادة لا تنتهي،",
  "سلاماً يحيط بقلبك،",
  "وبركاتٍ جميلة في عيد الأضحى هذا.",
  "نسأل الله أن يتقبل دعاءك ويملأ حياتك نوراً وفرحاً.",
];

function EidMessage() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (line >= lines.length) return;
    const timeout = setTimeout(() => {
      setText(lines[line].slice(0, char + 1));
      if (char + 1 === lines[line].length) {
        setLine((prev) => prev + 1);
        setChar(0);
      } else {
        setChar((prev) => prev + 1);
      }
    }, 60);

    return () => clearTimeout(timeout);
  }, [char, line]);

  const message = useMemo(() => {
    const completed = lines.slice(0, line).join(" ");
    return `${completed} ${text}`.trim();
  }, [line, text]);

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0712] via-[#0f0b1b] to-[#050208]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(242,200,125,0.18),_transparent_22%),radial-gradient(circle_at_82%_8%,_rgba(247,201,217,0.16),_transparent_18%)] pointer-events-none" />

      <div className="relative z-10 grid min-h-screen gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="rounded-[42px] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-xl">
            <p className="uppercase tracking-[0.3em] text-goldSoft text-xs">
              رسالة شخصية
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              تهنئة قلبية بمناسبة عيد الأضحى
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-9 text-beige/85">
              {message}
              <span className="inline-block h-6 w-1 animate-pulse bg-goldSoft align-middle ml-2" />
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <button
              onClick={() => navigate("/spirit")}
              className="rounded-[32px] bg-white/10 px-8 py-5 text-lg font-semibold text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:bg-white/15"
            >
              تابع الرحلة ✨
            </button>
            <button
              onClick={() => navigate("/")}
              className="rounded-[32px] border border-goldSoft/40 bg-transparent px-8 py-5 text-lg font-semibold text-goldSoft transition hover:-translate-y-1 hover:bg-goldSoft/10"
            >
              أرسل الحب ❤️
            </button>
          </div>
        </div>

        <div className="relative rounded-[42px] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-xl">
          <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-pinkSoft/10 blur-3xl" />
          <div className="absolute right-10 bottom-12 h-28 w-28 rounded-full bg-gold/10 blur-3xl" />
          <div className="space-y-6">
            <div className="flex items-center gap-4 rounded-3xl bg-white/5 p-5">
              <span className="text-4xl">✨</span>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-goldSoft">
                  بريق العيد
                </p>
                <p className="text-white/90">
                  لمسات فنية وموسيقى سهلة الحركة لروح احتفالية.
                </p>
              </div>
            </div>
            <div className="grid gap-4 rounded-[32px] border border-white/10 bg-black/20 p-6">
              <div className="flex items-center justify-between rounded-3xl bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.22em] text-goldSoft">
                  قلوب عائمة
                </p>
                <span className="text-2xl">❤️</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.22em] text-goldSoft">
                  نجوم لامعة
                </p>
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default EidMessage;
