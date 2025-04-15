"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function TawkToWidget() {
  <>
    <Script
      src="https://embed.tawk.to/67fdd6c4103aa0190d9e8593/default"
      strategy="afterInteractive"
      crossOrigin="*"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `,
      }}
    />
  </>;
}
