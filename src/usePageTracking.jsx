import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;
    window.gtag("config", "G-Y3W0YE81WC", {
      page_path: location.pathname + location.search,
    });
  }, [location]);
}

export default usePageTracking;