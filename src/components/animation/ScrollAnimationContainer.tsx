"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";

interface ScrollAnimationContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimationContainer = ({
  children,
  className,
}: ScrollAnimationContainerProps) => {
  const containerRef = useScrollAnimation();

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollAnimationContainer;
