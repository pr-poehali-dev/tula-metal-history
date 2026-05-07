import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const PORTRAIT_URL = "https://cdn.poehali.dev/projects/b27fb85c-79e3-4751-a2e4-6e2a95c1f1f2/files/2b66e507-26aa-4e88-a616-1eceef694f11.jpg";
const FACTORY_URL = "https://cdn.poehali.dev/projects/b27fb85c-79e3-4751-a2e4-6e2a95c1f1f2/files/0a5d8397-acdb-4933-80f5-89a78c312268.jpg";
const WEAPONS_URL = "https://cdn.poehali.dev/projects/b27fb85c-79e3-4751-a2e4-6e2a95c1f1f2/files/57cd1958-7cdf-4b36-8235-b65801d5a5c1.jpg";
const FLOOR_PLAN_URL = "https://cdn.poehali.dev/projects/b27fb85c-79e3-4751-a2e4-6e2a95c1f1f2/bucket/bd081d01-7df8-4830-86f5-c749fd29eda6.jpg";

const timelineItems = [
  { year: "1656", text: "Рождение в семье тульского кузнеца. Ранние годы у горна — первые уроки железного дела." },
  { year: "1685", text: "Никита Демидов открывает собственную кузнечную мастерскую в Туле, быстро снискав известность." },
  { year: "1694", text: "Основание первого Тульского завода. Начало большого промышленного дела Демидовых." },
  { year: "1696", text: "Знакомство с Петром I во время Азовских походов. Царь оценил качество тульского оружия." },
  { year: "1702", text: "По указу Петра I — передача Невьянского завода на Урале. Начало уральской металлургии." },
  { year: "1718", text: "Никита Демидов возведён в дворянское достоинство — признание заслуг перед Отечеством." },
  { year: "1725", text: "Кончина Никиты Демидовича. Дело продолжили его сыновья — Акинфий, Григорий и Никита." },
];

const exhibits = [
  {
    id: 1,
    zone: "Экспозиция 4",
    title: "Зарождение металлообработки",
    description: "Образцы продукции первых заводов, первый чугун и биография Демидова. Предметы кузнечного производства из раскопок на территории Зарецы и Кремля.",
    icon: "Flame",
    color: "#e8c48a",
  },
  {
    id: 2,
    zone: "Экспозиция 5–6",
    title: "Кузнечный горн. Никита Демидов в Туле",
    description: "Портрет и биография Н. Демидова. История предприятия, карта, макет станов, продукция, узлы цехов. Изображение плотины и разрез завода.",
    icon: "Hammer",
    color: "#f5a642",
  },
  {
    id: 3,
    zone: "Экспозиция 8",
    title: "Храмы, построенные А.Н. Демидовым",
    description: "История Никольско-Зарецкой церкви (1730 е гг.), построенной Акинфием Демидовым. Водосвятная чаша, фотографии, документы.",
    icon: "Church",
    color: "#d4a820",
  },
  {
    id: 4,
    zone: "Экспозиция 7",
    title: "Дети Демидова",
    description: "Дети Н.Д. Демидова: Акинфий, Григорий, Никита. Научные деятели Демидовского института. Акинфий Демидов в Туле.",
    icon: "Users",
    color: "#c8883a",
  },
  {
    id: 5,
    zone: "Экспозиция 9",
    title: "Портрет Акинфия Демидова",
    description: "Парадный портрет Акинфия Никитича Демидова — продолжателя отцовского дела и строителя уральских заводов.",
    icon: "Frame",
    color: "#b87040",
  },
  {
    id: 6,
    zone: "Приборная мастерская",
    title: "История приборной мастерской на ТОЗе",
    description: "Часы, астролябии, барометры, термометры. История точного производства на Тульском оружейном заводе с 1787 года.",
    icon: "Gauge",
    color: "#8a6830",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedExhibit, setSelectedExhibit] = useState<number | null>(null);
  useScrollReveal();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { id: "biography", label: "Биография" },
    { id: "factory", label: "История завода" },
    { id: "exhibits", label: "Экспонаты" },
    { id: "plan", label: "План экспозиции" },
  ];

  return (
    <div className="min-h-screen font-cormorant" style={{ background: "#1a1510" }}>

      {/* NAVIGATION */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background: "linear-gradient(to bottom, rgba(20,14,8,0.97), rgba(20,14,8,0.85))",
          borderBottom: "1px solid rgba(200,136,58,0.25)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 flex items-center justify-center"
            style={{ border: "1px solid #c8883a" }}
          >
            <span style={{ color: "#c8883a", fontSize: "14px", fontFamily: "Cormorant Garamond, serif" }}>Д</span>
          </div>
          <span
            className="font-cormorant font-semibold tracking-widest text-sm uppercase hidden sm:block"
            style={{ color: "#e8d4a8", letterSpacing: "0.2em" }}
          >
            Демидов
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="nav-link font-oswald text-xs tracking-widest uppercase"
              style={{ color: "#c8a878", letterSpacing: "0.15em" }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#c8883a" }}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(15,10,5,0.97)" }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-oswald text-xl tracking-widest uppercase"
              style={{ color: "#e8c88a" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#0e0a06" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PORTRAIT_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            filter: "brightness(0.2) sepia(0.5)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200,136,58,0.08) 0%, rgba(10,7,3,0.85) 70%, rgba(5,3,1,0.98) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to bottom, transparent, #1a1510)" }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-slow">
            <div className="h-px w-16 sm:w-32" style={{ background: "linear-gradient(to right, transparent, #c8883a)" }} />
            <span className="font-oswald text-xs tracking-[0.4em] uppercase" style={{ color: "#c8883a" }}>
              Тула · XVII–XVIII вв.
            </span>
            <div className="h-px w-16 sm:w-32" style={{ background: "linear-gradient(to left, transparent, #c8883a)" }} />
          </div>

          <h1
            className="font-cormorant font-bold leading-none mb-4 animate-fade-in"
            style={{
              fontSize: "clamp(3rem, 10vw, 7rem)",
              color: "#f5e8c8",
              textShadow: "0 2px 30px rgba(200,136,58,0.3)",
            }}
          >
            Никита Демидов
          </h1>

          <p
            className="font-fell italic text-xl sm:text-2xl mb-3 animate-fade-in"
            style={{ color: "#c8a878" }}
          >
            Отец русской металлургии
          </p>

          <p
            className="font-cormorant text-base sm:text-lg mb-10"
            style={{ color: "#8a7060" }}
          >
            1656 — 1725
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("biography")}
              className="px-8 py-3 font-oswald text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #c8883a, #8a5820)",
                color: "#f5ead8",
                letterSpacing: "0.2em",
                boxShadow: "0 4px 20px rgba(200,136,58,0.3)",
              }}
            >
              Начать экскурсию
            </button>
            <button
              onClick={() => scrollTo("plan")}
              className="px-8 py-3 font-oswald text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-80"
              style={{
                background: "transparent",
                color: "#c8a878",
                border: "1px solid rgba(200,136,58,0.4)",
                letterSpacing: "0.2em",
              }}
            >
              План экспозиции
            </button>
          </div>

          <div className="mt-16 flex flex-col items-center gap-2">
            <span className="font-oswald text-xs tracking-widest" style={{ color: "#6a5040" }}>
              ЛИСТАТЬ ВНИЗ
            </span>
            <div className="animate-bounce">
              <Icon name="ChevronDown" size={18} style={{ color: "#8a6030" }} />
            </div>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section id="biography" className="py-20 sm:py-32" style={{ background: "#1a1510" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="font-oswald text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#c8883a" }}>
              I. Биография
            </p>
            <h2
              className="font-cormorant font-bold mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f0e0c0" }}
            >
              Жизненный путь
            </h2>
            <div className="ornament-line max-w-xs mx-auto">
              <span className="font-fell italic text-sm" style={{ color: "#8a7060", whiteSpace: "nowrap" }}>
                от кузнеца до дворянина
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <div
                className="stamp-border overflow-hidden"
                style={{ background: "#0e0a06", padding: "8px" }}
              >
                <img
                  src={PORTRAIT_URL}
                  alt="Никита Демидов"
                  className="w-full object-cover"
                  style={{ filter: "sepia(0.3) contrast(1.1)", maxHeight: "480px" }}
                />
              </div>
              <p className="text-center mt-3 font-fell italic text-sm" style={{ color: "#6a5840" }}>
                Портрет Никиты Демидовича Демидова
              </p>
            </div>

            <div className="reveal space-y-0">
              <p
                className="font-cormorant text-lg leading-relaxed mb-8"
                style={{ color: "#b09070" }}
              >
                Никита Демидович Антуфьев — сын тульского кузнеца, ставший одним из крупнейших промышленников России. Его встреча с Петром I стала поворотным моментом: царь, оценив мастерство тульского оружейника, даровал ему земли и заводы на Урале.
              </p>

              <div className="relative">
                <div
                  className="absolute left-[5px] top-3 bottom-3 w-px"
                  style={{ background: "linear-gradient(to bottom, #c8883a, transparent)" }}
                />
                <div className="space-y-6">
                  {timelineItems.map((item, i) => (
                    <div key={i} className="flex gap-5 items-start pl-1">
                      <div className="timeline-dot mt-1" />
                      <div>
                        <span
                          className="font-oswald text-sm font-semibold"
                          style={{ color: "#c8883a", letterSpacing: "0.1em" }}
                        >
                          {item.year}
                        </span>
                        <p className="font-cormorant text-base mt-0.5" style={{ color: "#9a8070" }}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTORY */}
      <section id="factory" className="py-20 sm:py-32" style={{ background: "#120e09" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="font-oswald text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#c8883a" }}>
              II. История завода
            </p>
            <h2
              className="font-cormorant font-bold mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f0e0c0" }}
            >
              Тульский оружейный завод
            </h2>
            <div className="ornament-line max-w-xs mx-auto">
              <span className="font-fell italic text-sm" style={{ color: "#8a7060", whiteSpace: "nowrap" }}>
                1694–1725
              </span>
            </div>
          </div>

          <div className="reveal mb-12">
            <div
              className="stamp-border overflow-hidden"
              style={{ background: "#0e0a06", padding: "8px" }}
            >
              <img
                src={FACTORY_URL}
                alt="Тульский завод"
                className="w-full object-cover"
                style={{ filter: "sepia(0.4) contrast(1.1)", maxHeight: "420px", objectPosition: "center" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {[
              {
                icon: "Factory",
                title: "Первый завод",
                year: "1694",
                text: "Демидов основал завод в Туле для производства оружия и железных изделий по государственному заказу.",
              },
              {
                icon: "Sword",
                title: "Оружие Петра I",
                year: "1696–1712",
                text: "Заводы Демидова поставляли ружья, пистолеты, сабли и пушки для армии Петра. Качество превосходило европейские образцы.",
              },
              {
                icon: "Mountain",
                title: "Уральские заводы",
                year: "1702",
                text: "Невьянский завод на Урале стал первым в будущей горнозаводской империи Демидовых — крупнейшей в России.",
              },
            ].map((block, i) => (
              <div
                key={i}
                className="exhibit-card p-6"
                style={{
                  background: "linear-gradient(135deg, #1c1610, #140f09)",
                  border: "1px solid rgba(200,136,58,0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(200,136,58,0.1)", border: "1px solid rgba(200,136,58,0.3)" }}
                  >
                    <Icon name={block.icon} fallback="Square" size={18} style={{ color: "#c8883a" }} />
                  </div>
                  <div>
                    <p className="font-oswald text-xs tracking-widest uppercase" style={{ color: "#c8883a" }}>
                      {block.year}
                    </p>
                    <p className="font-cormorant font-semibold text-lg" style={{ color: "#e8d4a8" }}>
                      {block.title}
                    </p>
                  </div>
                </div>
                <p className="font-cormorant text-base" style={{ color: "#8a7060" }}>
                  {block.text}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-16 p-8 reveal text-center"
            style={{
              border: "1px solid rgba(200,136,58,0.2)",
              background: "rgba(200,136,58,0.03)",
            }}
          >
            <Icon name="Quote" size={24} style={{ color: "#c8883a", margin: "0 auto 16px" }} />
            <p
              className="font-fell italic text-xl sm:text-2xl leading-relaxed"
              style={{ color: "#c8a878" }}
            >
              «Железо Демидова лучше шведского» — такую оценку дал Пётр I
              тульским металлам, освободив тем самым Россию от иностранной зависимости.
            </p>
          </div>
        </div>
      </section>

      {/* EXHIBITS */}
      <section id="exhibits" className="py-20 sm:py-32" style={{ background: "#1a1510" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="font-oswald text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#c8883a" }}>
              III. Экспонаты
            </p>
            <h2
              className="font-cormorant font-bold mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f0e0c0" }}
            >
              Залы экспозиции
            </h2>
            <div className="ornament-line max-w-xs mx-auto">
              <span className="font-fell italic text-sm" style={{ color: "#8a7060", whiteSpace: "nowrap" }}>
                подвальные помещения музея
              </span>
            </div>
          </div>

          <div className="reveal mb-12">
            <div
              className="stamp-border overflow-hidden"
              style={{ background: "#0e0a06", padding: "8px" }}
            >
              <img
                src={WEAPONS_URL}
                alt="Коллекция оружия"
                className="w-full object-cover"
                style={{ filter: "sepia(0.35) contrast(1.1)", maxHeight: "360px", objectPosition: "center" }}
              />
            </div>
            <p className="text-center mt-3 font-fell italic text-sm" style={{ color: "#6a5840" }}>
              Коллекция оружия и изделий Тульских заводов
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {exhibits.map((ex, i) => (
              <div
                key={ex.id}
                className="exhibit-card reveal cursor-pointer"
                style={{
                  background: "linear-gradient(145deg, #1c1610, #130e08)",
                  border: `1px solid ${ex.color}40`,
                }}
                onClick={() => setSelectedExhibit(selectedExhibit === ex.id ? null : ex.id)}
              >
                <div style={{ borderLeft: `3px solid ${ex.color}`, padding: "20px 20px 20px 17px" }}>
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ background: `${ex.color}15`, border: `1px solid ${ex.color}50` }}
                    >
                      <Icon name={ex.icon} fallback="Square" size={18} style={{ color: ex.color }} />
                    </div>
                    <span
                      className="font-oswald text-xs tracking-widest uppercase"
                      style={{ color: `${ex.color}99` }}
                    >
                      {ex.zone}
                    </span>
                  </div>
                  <h3
                    className="font-cormorant font-semibold text-lg leading-tight mb-2"
                    style={{ color: "#e8d4a8" }}
                  >
                    {ex.title}
                  </h3>
                  <div
                    style={{
                      maxHeight: selectedExhibit === ex.id ? "200px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <p className="font-cormorant text-sm leading-relaxed pt-2" style={{ color: "#8a7060" }}>
                      {ex.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <span className="font-oswald text-xs uppercase tracking-wider" style={{ color: `${ex.color}80` }}>
                      {selectedExhibit === ex.id ? "Свернуть" : "Подробнее"}
                    </span>
                    <Icon
                      name={selectedExhibit === ex.id ? "ChevronUp" : "ChevronDown"}
                      size={14}
                      style={{ color: `${ex.color}80` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOOR PLAN */}
      <section id="plan" className="py-20 sm:py-32" style={{ background: "#120e09" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="font-oswald text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#c8883a" }}>
              IV. Навигация
            </p>
            <h2
              className="font-cormorant font-bold mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f0e0c0" }}
            >
              План подвальных помещений
            </h2>
            <div className="ornament-line max-w-xs mx-auto">
              <span className="font-fell italic text-sm" style={{ color: "#8a7060", whiteSpace: "nowrap" }}>
                схема расположения экспозиций
              </span>
            </div>
          </div>

          <div className="reveal">
            <div
              className="stamp-border overflow-hidden"
              style={{ background: "#f5ead8", padding: "12px" }}
            >
              <img
                src={FLOOR_PLAN_URL}
                alt="План подвальных помещений"
                className="w-full"
              />
            </div>
            <p className="text-center mt-3 font-fell italic text-sm" style={{ color: "#6a5840" }}>
              Схема расположения экспозиционных зон в подвальных помещениях музея
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 text-center"
        style={{
          background: "#0a0704",
          borderTop: "1px solid rgba(200,136,58,0.2)",
        }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, #c8883a)" }} />
          <div
            className="w-8 h-8 flex items-center justify-center"
            style={{ border: "1px solid rgba(200,136,58,0.4)" }}
          >
            <span style={{ color: "#c8883a", fontSize: "14px", fontFamily: "Cormorant Garamond, serif" }}>Д</span>
          </div>
          <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, #c8883a)" }} />
        </div>
        <p className="font-cormorant text-sm" style={{ color: "#5a4830" }}>
          Интерактивная экспозиция · Музей Никиты Демидова · Тула
        </p>
        <p className="font-oswald text-xs mt-2 tracking-widest uppercase" style={{ color: "#3a2e20" }}>
          1656 — 1725
        </p>
      </footer>
    </div>
  );
}