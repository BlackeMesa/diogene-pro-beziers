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
