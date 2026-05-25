import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const wishes = [
  { text: "ليضيء عيدك بسعادة لا تنتهي ✨" },
  { text: "أسأل الله أن يبارك قلبك بالسلام 🌙" },
  { text: "أتمنى لك لحظات فرح لا تُنسى ❤️" },
];

function Wishes() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_rgba(247,201,217,0.16),_transparent_20%),radial-gradient(circle_at_85%_20%,_rgba(255,193,96,0.12),_transparent_18%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=120 height=120 viewBox=0 0 120 120%3E%3Cpath fill=\'rgba(255,255,255,0.04)\' d=\'M60 0L73 40H120L83 62L96 102L60 80L24 102L37 62L0 40H47z\'/%3E%3C/svg%3E')] opacity-20 bg-[length:120px_120px]" />

      <div className="relative z-10 space-y-10">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-goldSoft text-xs opacity-90">
            تجربة التهاني
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            أمنيات العيد المضيئة
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-beige/85">
            اجعل كل بطاقة تمنحك شعورًا دافئًا من الحب والبركة في هذه المناسبة
            الخاصة.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              whileHover={{ rotateY: 10, y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-luxe backdrop-blur-xl transition-transform"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,193,96,0.14),_transparent_28%)]" />
              <div className="relative z-10 space-y-4">
                <div className="text-5xl">💫</div>
                <p className="text-xl font-semibold text-white">{wish.text}</p>
                <p className="text-beige/80 leading-7">
                  بطاقة تمنيات فاخرة تتحرك بلطف لتعبر عن دفء الاحتفال.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => navigate("/countdown")}
            className="rounded-[32px] bg-gold/90 px-8 py-4 text-lg font-semibold text-black shadow-[0_25px_65px_rgba(242,200,125,0.28)] transition hover:-translate-y-1"
          >
            انتقل للعداد
          </button>
          <button
            onClick={() => navigate("/gallery")}
            className="rounded-[32px] border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            العودة للصور
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default Wishes;
