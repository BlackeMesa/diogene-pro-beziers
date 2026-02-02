import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API: {
      customStyle?: {
        visibility?: {
          desktop?: { position?: string; xOffset?: string; yOffset?: string };
          mobile?: { position?: string; xOffset?: number; yOffset?: number };
        };
      };
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
    };
    Tawk_LoadStart: Date;
  }
}

const TawkToChat = () => {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Positionner le widget au-dessus du bouton "Devis Garanti"
    window.Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: "br", // bottom right
          xOffset: "32px",
          yOffset: "100px", // Au-dessus du bouton Devis Garanti
        },
        mobile: {
          position: "br",
          xOffset: 0,
          yOffset: 80, // Pas de bouton Devis en mobile, on peut le baisser
        },
      },
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6980acbbee66171c383f9138/1jgfa5fm5";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      // Cleanup au démontage
      const tawkScript = document.querySelector('script[src*="tawk.to"]');
      if (tawkScript) {
        tawkScript.remove();
      }
    };
  }, []);

  return null;
};

export default TawkToChat;
