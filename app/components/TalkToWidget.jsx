"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function TawkToWidget() {
  <>
    <Script
      src="https://embed.tawk.to/67fdd6c4103aa0190d9e8593/default"
      strategy="afterInteractive"
      crossOrigin="*"
    />
  </>;
}
