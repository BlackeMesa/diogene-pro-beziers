import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackTimeOnPage } from '@/lib/analytics';

export const useAnalytics = () => {
  const location = useLocation();
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    // Track page view on route change
    const pageTitle = document.title;
    trackPageView(location.pathname, pageTitle);
    
    // Reset start time
    startTimeRef.current = Date.now();

    // Track time on page when leaving
    return () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      if (timeSpent > 5) { // Only track if user spent more than 5 seconds
        trackTimeOnPage(timeSpent);
      }
    };
  }, [location]);
};

export default useAnalytics;
