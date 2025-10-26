// Google Analytics tracking utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
    
    // Debug mode - log events in development
    if (import.meta.env.DEV) {
      console.log('📊 Analytics Event:', eventName, eventParams);
    }
  }
};

export const trackPageView = (path: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-65GLC7TYXT', {
      page_path: path,
      page_title: title,
    });
    
    trackEvent('page_view', {
      page_path: path,
      page_title: title,
      page_location: window.location.href,
      referrer: document.referrer,
      device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    });
  }
};

// Navigation tracking
export const trackNavigationClick = (destination: string, label: string) => {
  trackEvent('navigation_click', {
    destination,
    label,
    location: window.location.pathname,
  });
};

// Phone call tracking
export const trackPhoneClick = (source: string) => {
  trackEvent(`phone_click_${source}`, {
    phone_number: '07 88 43 20 55',
    source,
    page: window.location.pathname,
  });
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
  trackEvent('scroll_depth', {
    depth_percentage: depth,
    page: window.location.pathname,
  });
};

// Time on page tracking
export const trackTimeOnPage = (timeInSeconds: number) => {
  trackEvent('time_on_page', {
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
  trackEvent('service_page_view', {
    service_name: serviceName,
    page: window.location.pathname,
  });
};

// Video tracking
export const trackVideoEvent = (action: 'play' | 'complete', videoName: string, progress?: number) => {
  trackEvent(`video_${action}`, {
    video_name: videoName,
    progress,
    page: window.location.pathname,
  });
};
