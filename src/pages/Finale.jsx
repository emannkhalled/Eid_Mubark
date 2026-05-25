import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const social = ["فيسبوك", "انستقرام", "واتساب"];

function Finale() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,_rgba(255,193,96,0.18),_transparent_22%),radial-gradient(circle_at_78%_12%,_rgba(247,201,217,0.14),_transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_26%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-24 h-24 w-24 rounded-full bg-pinkSoft/20 blur-3xl" />
        <div className="absolute right-16 top-40 h-28 w-28 rounded-full bg-goldSoft/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-center gap-10 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-goldSoft text-xs opacity-90">
            ختام العيد
          </p>
          <h1 className="mt-4 text-[4rem] font-serif leading-[0.9] text-white sm:text-[5rem]">
            عيد أضحى سعيد <span className="text-goldSoft">❤️</span>
          </h1>
          <p className="mt-6 text-xl leading-9 text-beige/85 sm:text-2xl">
            شكرًا لكونك جزءًا من هذه الرحلة الجميلة. نتمنى لك عيدًا مليئًا بالحب
            والسلام والسعادة.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {["🎆", "🕯️", "🌙"].map((icon, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-xl"
            >
              <span className="mb-4 block text-5xl">{icon}</span>
              <p className="text-lg font-semibold text-white">
                عنصر احتفالي فاخر
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-center">
          <button
            onClick={() => window.location.reload()}
            className="rounded-[32px] bg-gold/90 px-8 py-4 text-lg font-semibold text-black shadow-[0_25px_65px_rgba(242,200,125,0.28)] transition hover:-translate-y-1"
          >
            أعد التجربة
          </button>
          <button
            onClick={() => navigate("/")}
            className="rounded-[32px] border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            العودة للصفحة الأولى
          </button>
        </div>

        <div className="mx-auto grid max-w-md gap-4 text-sm text-beige/80">
          {social.map((item) => (
            <button
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-white transition hover:border-goldSoft/50 hover:bg-goldSoft/10"
            >
              مشاركة عبر {item}
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Finale;
