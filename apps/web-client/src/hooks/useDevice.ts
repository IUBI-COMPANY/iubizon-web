import { useEffect, useState } from "react";

export const useDevice = () => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentScreenWidth(window.innerWidth);

    const resizeObserver = new ResizeObserver((entries) => {
      const bodyWidth = entries[0].target.clientWidth;
      setCurrentScreenWidth(bodyWidth);
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return {
    currentScreenWidth,
    isMobile: isMounted ? currentScreenWidth < 1100 : false,
    isMounted,
  };
};
