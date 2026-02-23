"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const useSidebarInfo = () => {
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const openInfoBar = (): void => {
    setIsInfoOpen(true);
    document.body.classList.add("on-side");
  };

  const closeInfoBar = (): void => {
    setIsInfoOpen(false);
    document.body.classList.remove("on-side");
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      closeInfoBar();
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return { isInfoOpen, openInfoBar, closeInfoBar };
};

export default useSidebarInfo;
