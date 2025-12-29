import { useState } from "react";

function BotaoFujao({ name, startX, startY }) {
  const mover = (e) => {
    const btn = e.currentTarget;
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    btn.style.left = `${Math.random() * maxX}px`;
    btn.style.top = `${Math.random() * maxY}px`;
  };

  return (
    <button
      onMouseEnter={mover}
      style={{
        padding: "20px 38px",
        backgroundColor: "#2fbc22ff",
        border: "none",
        left: startX,
        top: startY,
        borderRadius: "8px",
        cursor: "pointer",
        position: "absolute",
      }}
    >
      {name}
    </button>
  );
}

function Home() {
  const [open, setOpen] = useState(true);

  const handleOpenSons = () => {
    setOpen(false);
  };
  return (
    <div>
      {open && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            gap: "20px",
          }}
        >
          <BotaoFujao name={"vape"} startX="40%" startY="40%" />

          <BotaoFujao name={"gooning"} startX="48%" startY="40%" />
          <button
            style={{
              padding: "20px 38px",
              backgroundColor: "#2fbc22ff",
              border: "none",
              left: "40%%",
              top: "40%",
              borderRadius: "8px",
              cursor: "pointer",
              absolute: "absolute",
            }}
            onClick={handleOpenSons}
          >
            sons of the bitches
          </button>
        </div>
      )}

      {!open && (
        <div>
          <img src="https://m.media-amazon.com/images/I/81r6r0rfODL._SY425_.jpg" />
          <h1>Amo muito tudo isso</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
