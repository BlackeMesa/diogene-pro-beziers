import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface ChatPromoBannerProps {
  variant?: "default" | "compact" | "highlight";
}

const ChatPromoBanner = ({ variant = "default" }: ChatPromoBannerProps) => {
  const handleClick = () => {
    trackEvent("chat_promo_click", {
      variant,
      page: window.location.pathname,
    });
    // Ouvrir le widget Tawk.to
    if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
      window.Tawk_API.maximize();
    }
  };

  if (variant === "compact") {
    return (
      <button
        onClick={handleClick}
        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
      >
        <div className="bg-white/20 rounded-full p-2 group-hover:scale-110 transition-transform">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div className="text-left">
          <p className="font-bold text-sm">Besoin d'aide ? Chattez avec nous !</p>
          <p className="text-xs text-white/80">Réponse en quelques minutes</p>
        </div>
      </button>
    );
  }

  if (variant === "highlight") {
    return (
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-1 shadow-xl animate-pulse-slow">
        <button onClick={handleClick} className="w-full bg-white dark:bg-gray-900 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full p-4 shadow-lg">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">💬 Chattez en direct avec nous !</p>
            <p className="text-gray-600 dark:text-gray-300">
              Une question ? Un doute ? Nous vous répondons <span className="font-semibold text-emerald-600">en quelques minutes</span>.
            </p>
          </div>
          <div className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition-colors">Démarrer le chat</div>
        </button>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 shadow-md">
      <button onClick={handleClick} className="w-full flex flex-col sm:flex-row items-center gap-4 text-left group">
        <div className="relative">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          {/* Indicateur "en ligne" */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></span>
        </div>
        <div className="text-center sm:text-left flex-1">
          <p className="text-lg font-bold text-gray-900 dark:text-white mb-1">Besoin de parler ? Nous sommes là !</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Posez vos questions en direct, sans engagement. Réponse rapide garantie.</p>
        </div>
        <div className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">Ouvrir le chat</div>
      </button>
    </div>
  );
};

export default ChatPromoBanner;
