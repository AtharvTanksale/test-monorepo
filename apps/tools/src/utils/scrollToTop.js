import { useEffect } from "react";
import { useLocation } from "@camonk/router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export { ScrollToTop };
