import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NettoyageDiogene from "./pages/NettoyageDiogene";
import DebarrasInsalubre from "./pages/DebarrasInsalubre";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NettoyageDiogeneBeziers from "./pages/NettoyageDiogeneBeziers";
import PrixNettoyageDiogene from "./pages/PrixNettoyageDiogene";
import AppartementTresSale from "./pages/AppartementTresSale";
import ZoneInterventionHerault from "./pages/ZoneInterventionHerault";
import NettoyageUrgence24h from "./pages/NettoyageUrgence24h";
import Sitemap from "./pages/Sitemap";
import FAQ from "./pages/FAQ";
import NettoyageDiogeneMontpellier from "./pages/NettoyageDiogeneMontpellier";
import NettoyageDiogeneSete from "./pages/NettoyageDiogeneSete";
import NettoyageDiogeneAgde from "./pages/NettoyageDiogeneAgde";
import NettoyageDiogeneLunel from "./pages/NettoyageDiogeneLunel";
import NettoyageDiogeneFrontignan from "./pages/NettoyageDiogeneFrontignan";
import useAnalytics from "./hooks/useAnalytics";
import ScrollDepthTracker from "./components/ScrollDepthTracker";

const queryClient = new QueryClient();

const AppContent = () => {
  useAnalytics();

  return (
    <>
      <ScrollDepthTracker />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/nettoyage-diogene" element={<NettoyageDiogene />} />
        <Route path="/debarras-insalubre" element={<DebarrasInsalubre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nettoyage-diogene-beziers" element={<NettoyageDiogeneBeziers />} />
        <Route path="/nettoyage-diogene-montpellier" element={<NettoyageDiogeneMontpellier />} />
        <Route path="/nettoyage-diogene-sete" element={<NettoyageDiogeneSete />} />
        <Route path="/nettoyage-diogene-agde" element={<NettoyageDiogeneAgde />} />
        <Route path="/nettoyage-diogene-lunel" element={<NettoyageDiogeneLunel />} />
        <Route path="/nettoyage-diogene-frontignan" element={<NettoyageDiogeneFrontignan />} />
        <Route path="/prix-nettoyage-diogene-herault" element={<PrixNettoyageDiogene />} />
        <Route path="/appartement-tres-sale-que-faire" element={<AppartementTresSale />} />
        <Route path="/zone-intervention-herault" element={<ZoneInterventionHerault />} />
        <Route path="/nettoyage-urgence-24h-herault" element={<NettoyageUrgence24h />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/sitemap.xml" element={<Sitemap />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
