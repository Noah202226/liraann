"use client";

import { useEffect } from "react";

export default function TawkToWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67fdd6c4103aa0190d9e8593/default";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
