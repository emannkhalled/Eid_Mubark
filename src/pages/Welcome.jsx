import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const pageTransition = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5, ease: "easeIn" } },
};

function Welcome() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,200,140,0.14),_transparent_18%)]"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-6 top-24 h-24 w-24 rounded-full bg-pinkSoft/20 blur-3xl" />
        <div className="absolute right-10 top-32 h-28 w-28 rounded-full bg-goldSoft/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-center gap-10 lg:justify-between lg:py-16">
        <div className="max-w-4xl">
          <p className="mb-4 uppercase tracking-[0.28em] text-goldSoft text-sm opacity-80">
            رسالة العيد الخاصة
          </p>
          <h1 className="font-serif text-[4rem] leading-[0.9] text-white drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)] sm:text-[5rem]">
            عيد مبارك <span className="inline-block text-goldSoft">✨</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-beige/90 sm:text-2xl">
            مرحبًا بك في رحلة عيد الأضحى الفاخرة. افتح مفاجأتك واستقبل تهنئة
            مفعمة بالدفء والرقي.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-end">
          <div className="space-y-4 rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-3xl bg-goldSoft/20 p-3 text-center text-3xl shadow-glow">
                🌙
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-goldSoft">
                  لمسة فاخرة
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  رحلة رقمية ساحرة
                </p>
              </div>
            </div>
            <p className="text-beige/80 leading-7">
              صفحة ترحيب سينمائية بضياء النجوم والفوانيس العائمة تعطيك إحساسًا
              بالاحتفال الخاص.
            </p>
          </div>

          <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/message")}
            className="group relative inline-flex min-h-[74px] w-full items-center justify-center rounded-[36px] border border-goldSoft/30 bg-gradient-to-r from-gold/80 via-goldSoft/20 to-pinkSoft/35 px-8 text-lg font-semibold text-black shadow-[0_20px_60px_rgba(242,200,125,0.35)] transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-[36px] bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            افتح مفاجأتك الآن
          </motion.button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-12 top-20 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-pinkSoft/10 blur-3xl" />
        <div className="absolute left-1/2 top-12 h-24 w-24 rounded-full bg-gold/20 blur-3xl" />
      </div>
    </motion.section>
  );
}

export default Welcome;
