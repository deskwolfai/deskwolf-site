"use client";

import { useEffect, useRef, useState } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

interface TurnstileProps {
  onToken: (token: string) => void;
}

export default function Turnstile({ onToken }: TurnstileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!SITE_KEY) return;

    // Load Turnstile script if not already present
    if (!document.getElementById("turnstile-script")) {
      const script = document.createElement("script");
      script.id = "turnstile-script";
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      script.async = true;
      document.head.appendChild(script);
    }

    (window as any).onTurnstileLoad = () => setLoaded(true);
    if ((window as any).turnstile) setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded || !ref.current || !SITE_KEY) return;

    // Clear any previous widget
    ref.current.innerHTML = "";

    (window as any).turnstile.render(ref.current, {
      sitekey: SITE_KEY,
      callback: (token: string) => onToken(token),
      appearance: "interaction-only",
      theme: "dark",
    });
  }, [loaded, onToken]);

  if (!SITE_KEY) return null;

  return <div ref={ref} />;
}
