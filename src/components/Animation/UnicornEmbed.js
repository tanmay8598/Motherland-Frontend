"use client";

import { useEffect } from "react";

export default function UnicornEmbed() {
  useEffect(() => {
    const loadUnicorn = () => {
      if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };

    if (!document.getElementById("unicorn-script")) {
      const script = document.createElement("script");
      script.id = "unicorn-script";
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = loadUnicorn;
      document.body.appendChild(script);
    } else {
      loadUnicorn();
    }
  }, []);

  return (
    <div
      data-us-project="OUb2fj8XEiMJ2dgYnDPs"
      // data-us-project="nhVTzmUyBDmFY2htc4OT"
      style={{
        width: "100%",
        height: "600px",
        margin: "0 auto",
        backgroudColor: "white",
      }}
    ></div>
  );
}
