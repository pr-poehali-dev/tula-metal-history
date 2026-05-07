const FLOOR_PLAN_URL = "https://cdn.poehali.dev/projects/b27fb85c-79e3-4751-a2e4-6e2a95c1f1f2/bucket/bd081d01-7df8-4830-86f5-c749fd29eda6.jpg";

export default function Index() {
  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center"
      style={{ background: "#0d0905", overflow: "hidden" }}
    >
      {/* === ФОНОВЫЙ СЛОЙ: картинка на весь экран === */}
      <div className="absolute inset-0">
        <img
          src={FLOOR_PLAN_URL}
          alt="План подвальных помещений"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "sepia(0.55) contrast(1.1) brightness(0.75) saturate(0.8)",
          }}
        />
      </div>

      {/* === СЛОЙ 1: пергаментная текстура === */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.09'/%3E%3C/svg%3E")
          `,
          mixBlendMode: "multiply",
          opacity: 0.6,
        }}
      />

      {/* === СЛОЙ 2: виньетка по краям === */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(6,4,2,0.65) 75%, rgba(3,2,1,0.92) 100%)
          `,
        }}
      />

      {/* === СЛОЙ 3: тонировка сепия-золото === */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, rgba(120,80,20,0.18) 0%, rgba(60,35,8,0.32) 60%, rgba(20,12,4,0.45) 100%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* === СЛОЙ 4: горизонтальные царапины === */}
      <div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.03) 3px,
            rgba(0,0,0,0.03) 4px
          )`,
          pointerEvents: "none",
        }}
      />

      {/* === НАДПИСЬ ПОВЕРХ === */}
      <div
        className="relative z-10 text-center px-6 w-full"
        style={{ pointerEvents: "none" }}
      >
        {/* Верхняя декоративная полоса */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to right, transparent, rgba(220,170,80,0.7))" }}
          />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="4" stroke="rgba(220,170,80,0.8)" strokeWidth="0.8"/>
            <line x1="12" y1="0" x2="12" y2="7" stroke="rgba(220,170,80,0.8)" strokeWidth="0.8"/>
            <line x1="12" y1="17" x2="12" y2="24" stroke="rgba(220,170,80,0.8)" strokeWidth="0.8"/>
            <line x1="0" y1="12" x2="7" y2="12" stroke="rgba(220,170,80,0.8)" strokeWidth="0.8"/>
            <line x1="17" y1="12" x2="24" y2="12" stroke="rgba(220,170,80,0.8)" strokeWidth="0.8"/>
          </svg>
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to left, transparent, rgba(220,170,80,0.7))" }}
          />
        </div>

        <p
          className="font-oswald text-xs tracking-[0.55em] uppercase mb-3"
          style={{ color: "rgba(200,150,60,0.75)", letterSpacing: "0.5em" }}
        >
          Тула · XVII–XVIII вв.
        </p>

        <h1
          className="font-cormorant font-bold mb-2"
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            color: "rgba(245,225,170,0.92)",
            textShadow: "0 2px 40px rgba(180,120,30,0.5), 0 0 80px rgba(100,60,10,0.4)",
            letterSpacing: "0.06em",
            lineHeight: 1.1,
          }}
        >
          НИКИТА ДЕМИДОВ
        </h1>

        <p
          className="font-fell italic"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            color: "rgba(190,145,70,0.7)",
            textShadow: "0 1px 12px rgba(100,60,10,0.5)",
          }}
        >
          План подвальных помещений экспозиции
        </p>

        {/* Нижняя полоса */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to right, transparent, rgba(180,120,40,0.5))" }}
          />
          <span style={{ color: "rgba(180,120,40,0.6)", fontSize: "16px" }}>✦</span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to left, transparent, rgba(180,120,40,0.5))" }}
          />
        </div>
      </div>

      {/* === УГОЛКИ-РАМКА === */}
      {[
        { top: 20, left: 20, rotate: 0 },
        { top: 20, right: 20, rotate: 90 },
        { bottom: 20, right: 20, rotate: 180 },
        { bottom: 20, left: 20, rotate: 270 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            ...pos,
            width: 40,
            height: 40,
            borderTop: "1px solid rgba(200,150,60,0.5)",
            borderLeft: "1px solid rgba(200,150,60,0.5)",
            transform: `rotate(${pos.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
