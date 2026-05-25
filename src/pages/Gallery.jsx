import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const images = [
  { label: "فوانيس العيد", theme: "gold" },
  { label: "وليمة الأهل", theme: "pink" },
  { label: "لحظة صلاة", theme: "beige" },
  { label: "ذكريات العائلة", theme: "orange" },
  { label: "أجواء المسجد", theme: "blue" },
];

function Gallery() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,_rgba(255,193,96,0.18),_transparent_20%),radial-gradient(circle_at_80%_5%,_rgba(247,201,217,0.15),_transparent_18%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=120 height=120 viewBox=0 0 120 120%3E%3Cpath fill=\'rgba(255,255,255,0.04)\' d=\'M60 0L73 40H120L83 62L96 102L60 80L24 102L37 62L0 40H47z\'/%3E%3C/svg%3E')] opacity-20 bg-[length:120px_120px]" />

      <div className="relative z-10 space-y-10">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-goldSoft text-xs opacity-90">
            سرد الذكريات
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            معرض ذكريات العيد
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-beige/85">
            استمتع بمشاهد سينمائية لرحلة العيد، مليئة بالفوانيس والعائلة
            واللحظات الأبدية.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1.1fr] xl:grid-cols-[1.5fr_1fr_1fr]">
          {images.map((image, idx) => (
            <motion.div
              key={image.label}
              whileHover={{ scale: 1.03 }}
              className={`group relative overflow-hidden rounded-[36px] border border-white/10 p-8 shadow-luxe backdrop-blur-xl bg-gradient-to-br ${
                image.theme === "gold"
                  ? "from-[#4d3b10] via-[#46370f] to-[#1a1306]"
                  : image.theme === "pink"
                    ? "from-[#3d1f2c] via-[#4f2039] to-[#120812]"
                    : image.theme === "beige"
                      ? "from-[#3d3730] via-[#2e2923] to-[#070505]"
                      : image.theme === "orange"
                        ? "from-[#3f2811] via-[#442b12] to-[#0a0502]"
                        : "from-[#14182c] via-[#0e1221] to-[#05060b]"
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,184,111,0.15),_transparent_28%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                <div>
                  <div className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-goldSoft">
                    {image.label}
                  </div>
                  <div className="h-52 rounded-[28px] bg-white/5 shadow-inner border border-white/10" />
                </div>
                <p className="text-beige/85 leading-7">
                  تفاصيل أنيقة تجعل هذه اللمحة من عيد الأضحى تبدو كلوحة فنية
                  متحركة.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => navigate("/wishes")}
            className="rounded-[32px] bg-gold/90 px-8 py-4 text-lg font-semibold text-black shadow-[0_25px_65px_rgba(242,200,125,0.28)] transition hover:-translate-y-1"
          >
            تابع اللحظات
          </button>
          <button
            onClick={() => navigate("/spirit")}
            className="rounded-[32px] border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            العودة للروح
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default Gallery;
