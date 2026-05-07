const FLOOR_PLAN_URL = "https://cdn.poehali.dev/projects/b27fb85c-79e3-4751-a2e4-6e2a95c1f1f2/bucket/bd081d01-7df8-4830-86f5-c749fd29eda6.jpg";

export default function Index() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 sm:p-10"
      style={{
        background: "#1a1208",
        backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(200,136,58,0.07) 0%, transparent 70%)`,
      }}
    >
      {/* Outer decorative frame */}
      <div
        className="w-full max-w-5xl"
        style={{
          border: "1px solid rgba(200,136,58,0.5)",
          boxShadow: "0 0 0 6px rgba(200,136,58,0.07), 0 0 0 7px rgba(200,136,58,0.2), 0 20px 60px rgba(0,0,0,0.7)",
          padding: "2px",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(200,136,58,0.25)",
            padding: "clamp(16px, 4vw, 48px)",
            background: "linear-gradient(160deg, #1e1609 0%, #150f06 100%)",
          }}
        >

          {/* Header */}
          <div className="text-center mb-6">
            {/* Top ornament */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(200,136,58,0.6))" }} />
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="5" fill="none" stroke="#c8883a" strokeWidth="1"/>
                <line x1="14" y1="0" x2="14" y2="8" stroke="#c8883a" strokeWidth="1"/>
                <line x1="14" y1="20" x2="14" y2="28" stroke="#c8883a" strokeWidth="1"/>
                <line x1="0" y1="14" x2="8" y2="14" stroke="#c8883a" strokeWidth="1"/>
                <line x1="20" y1="14" x2="28" y2="14" stroke="#c8883a" strokeWidth="1"/>
                <line x1="4" y1="4" x2="9.5" y2="9.5" stroke="#c8883a" strokeWidth="0.7"/>
                <line x1="18.5" y1="18.5" x2="24" y2="24" stroke="#c8883a" strokeWidth="0.7"/>
                <line x1="24" y1="4" x2="18.5" y2="9.5" stroke="#c8883a" strokeWidth="0.7"/>
                <line x1="9.5" y1="18.5" x2="4" y2="24" stroke="#c8883a" strokeWidth="0.7"/>
              </svg>
              <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(200,136,58,0.6))" }} />
            </div>

            <p
              className="font-oswald text-xs tracking-[0.5em] uppercase mb-2"
              style={{ color: "#8a6830" }}
            >
              Музей · Тула
            </p>
            <h1
              className="font-cormorant font-bold"
              style={{
                fontSize: "clamp(1.6rem, 5vw, 3rem)",
                color: "#f0ddb0",
                letterSpacing: "0.05em",
                textShadow: "0 2px 20px rgba(200,136,58,0.2)",
              }}
            >
              План подвальных помещений
            </h1>
            <p
              className="font-fell italic mt-1"
              style={{ color: "#7a6040", fontSize: "1rem" }}
            >
              Экспозиция, посвящённая Никите Демидову
            </p>

            {/* Bottom ornament */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(200,136,58,0.3))" }} />
              <span style={{ color: "rgba(200,136,58,0.5)", fontSize: "18px" }}>✦</span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(200,136,58,0.3))" }} />
            </div>
          </div>

          {/* Floor plan image */}
          <div
            style={{
              border: "1px solid rgba(200,136,58,0.35)",
              padding: "10px",
              background: "#f7edd8",
              boxShadow: "inset 0 0 30px rgba(180,130,60,0.15), 0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={FLOOR_PLAN_URL}
              alt="План подвальных помещений"
              style={{
                width: "100%",
                display: "block",
                filter: "sepia(0.18) contrast(1.05) brightness(0.97)",
              }}
            />
          </div>

          {/* Footer caption */}
          <div className="text-center mt-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(200,136,58,0.4))" }} />
              <span style={{ color: "rgba(200,136,58,0.4)", fontSize: "14px" }}>✦</span>
              <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(200,136,58,0.4))" }} />
            </div>
            <p
              className="font-fell italic text-sm"
              style={{ color: "#5a4428" }}
            >
              Никита Демидович Демидов · 1656 — 1725
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
