import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si il y a un hash (#simulator par exemple), on ne fait rien
    // Le navigateur scrollera automatiquement vers l'ancre
    if (hash) {
      return;
    }

    // Sinon, on scroll vers le haut de la page
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
