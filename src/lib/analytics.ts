// Google Analytics & Microsoft Clarity tracking utilities
import Clarity from "@microsoft/clarity";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Helper pour envoyer aussi à Clarity
const trackClarityEvent = (eventName: string) => {
  try {
    Clarity.event(eventName);
  } catch (e) {
    // Clarity pas encore initialisé
  }
};

const setClarityTag = (key: string, value: string) => {
  try {
    Clarity.setTag(key, value);
  } catch (e) {
    // Clarity pas encore initialisé
  }
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);

    // Envoyer aussi à Clarity
    trackClarityEvent(eventName);

    // Debug mode - log events in development
    if (import.meta.env.DEV) {
      console.log("📊 Analytics Event:", eventName, eventParams);
    }
  }
};

// Google Ads Conversion tracking
export const trackGoogleAdsConversion = (conversionId: string, value: number = 1.0, currency: string = "EUR") => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: conversionId,
      value: value,
      currency: currency,
    });

    // Debug mode
    if (import.meta.env.DEV) {
      console.log("💰 Google Ads Conversion:", conversionId, { value, currency });
    }
  }
};

export const trackPageView = (path: string, title: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-65GLC7TYXT", {
      page_path: path,
      page_title: title,
    });

    trackEvent("page_view", {
      page_path: path,
      page_title: title,
      page_location: window.location.href,
      referrer: document.referrer,
      device_type: /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop",
    });
  }
};

// Navigation tracking
export const trackNavigationClick = (destination: string, label: string) => {
  trackEvent("navigation_click", {
    destination,
    label,
    location: window.location.pathname,
  });
};

// Phone call tracking
export const trackPhoneClick = (source: string) => {
  // Tag Clarity pour filtrer les sessions avec appel téléphonique
  setClarityTag("phone_clicked", "true");
  setClarityTag("phone_source", source);

  trackEvent(`phone_click_${source}`, {
    phone_number: "07 56 87 57 07",
    source,
    page: window.location.pathname,
  });

  // Google Ads Conversion - Appel téléphonique
  trackGoogleAdsConversion("AW-17856747276/gE87CIDM-N0bEIyu4cJC", 1.0);
};

// CTA tracking
export const trackCTAClick = (ctaType: string, ctaLabel: string, destination?: string) => {
  trackEvent(`cta_${ctaType}_click`, {
    cta_label: ctaLabel,
    destination,
    page: window.location.pathname,
  });
};

// Simulator tracking
export const trackSimulatorEvent = (eventType: string, data?: Record<string, any>) => {
  trackEvent(`simulator_${eventType}`, {
    ...data,
    page: window.location.pathname,
  });
};

// Form tracking
export const trackFormEvent = (formName: string, eventType: string, data?: Record<string, any>) => {
  // Tag Clarity pour les soumissions de formulaire
  if (eventType === "submit" || eventType === "success") {
    setClarityTag("form_submitted", formName);

    // Google Ads Conversion - Formulaire soumis avec succès
    if (eventType === "success") {
      trackGoogleAdsConversion("AW-17856747276/gE87CIDM-N0bEIyu4cJC", 1.0);
    }
  }

  trackEvent(`${formName}_form_${eventType}`, {
    form_name: formName,
    ...data,
    page: window.location.pathname,
  });
};

// Content engagement tracking
export const trackContentEngagement = (contentType: string, action: string, label?: string) => {
  trackEvent(`${contentType}_${action}`, {
    content_type: contentType,
    action,
    label,
    page: window.location.pathname,
  });
};

// Scroll depth tracking
export const trackScrollDepth = (depth: number) => {
  trackEvent("scroll_depth", {
    depth_percentage: depth,
    page: window.location.pathname,
  });
};

// Time on page tracking
export const trackTimeOnPage = (timeInSeconds: number) => {
  trackEvent("time_on_page", {
    time_seconds: timeInSeconds,
    page: window.location.pathname,
  });
};

// Error tracking
export const trackError = (errorType: string, errorMessage: string, context?: Record<string, any>) => {
  trackEvent(`${errorType}_error`, {
    error_message: errorMessage,
    ...context,
    page: window.location.pathname,
  });
};

// Service page view
export const trackServicePageView = (serviceName: string) => {
  trackEvent("service_page_view", {
    service_name: serviceName,
    page: window.location.pathname,
  });
};

// Video tracking
export const trackVideoEvent = (action: "play" | "complete", videoName: string, progress?: number) => {
  trackEvent(`video_${action}`, {
    video_name: videoName,
    progress,
    page: window.location.pathname,
  });
};
