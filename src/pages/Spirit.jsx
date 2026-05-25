import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const spiritCards = [
  {
    title: "التضحية",
    icon: "🕊️",
    description: "تذكّرنا قوة العطاء وقيمة القلب المستعد للتضحية.",
  },
  {
    title: "الامتنان",
    icon: "🌿",
    description: "نمتن لكل نعمة ونحافظ على كل هدية من الله.",
  },
  {
    title: "العائلة",
    icon: "👨‍👩‍👧",
    description: "يجمعنا العيد تحت سقف الحب والألفة.",
  },
  {
    title: "الطيبة",
    icon: "🤲",
    description: "نشارك المحبة وننتشر بالكرم والعطف.",
  },
  {
    title: "الإيمان",
    icon: "🌙",
    description: "الروح تجد الراحة في الثقة بالله ودعائه.",
  },
];

function Spirit() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,_rgba(255,193,96,0.16),_transparent_18%),radial-gradient(circle_at_80%_10%,_rgba(247,201,217,0.14),_transparent_20%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'%3E%3Cpath d=\'M80 0 L100 40 L140 50 L110 80 L120 120 L80 100 L40 120 L50 80 L20 50 L60 40 Z\' fill=\'rgba(255,255,255,0.04)\'/%3E%3C/svg%3E')] bg-[length:160px_160px] opacity-30" />
      <div className="relative z-10 space-y-10">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-goldSoft text-xs opacity-90">
            روح العيد
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            أصالة العيد، مع إيقاع العصري الراقي
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-beige/85">
            اكتشف القيم التي تجعل عيد الأضحى رحلة القلب، بين ضيافة العائلة
            وروحانية التضحية.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {spiritCards.map((card, idx) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-xl"
            >
              <div className="absolute -right-14 top-16 h-40 w-40 rounded-full bg-goldSoft/15 blur-3xl group-hover:bg-goldSoft/25" />
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-goldSoft/10 text-3xl shadow-glow">
                {card.icon}
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-4 text-beige/80 leading-8">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => navigate("/gallery")}
            className="rounded-[32px] bg-gold/90 px-8 py-4 text-lg font-semibold text-black shadow-[0_25px_65px_rgba(242,200,125,0.28)] transition hover:-translate-y-1"
          >
            استمر في الرحلة
          </button>
          <button
            onClick={() => navigate("/message")}
            className="rounded-[32px] border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            العودة للرسالة
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default Spirit;
