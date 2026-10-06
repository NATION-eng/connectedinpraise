import React, { useEffect, useRef, useState } from "react";

export function CounterNumber({
  value,
  duration = 2000,
  className = "",
}) {
  const [displayValue, setDisplayValue] = useState(
    // If pure number string or number, start at 0, otherwise start at final value
    typeof value === "number" || !isNaN(parseInt(value)) ? 0 : value
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if the value is non-numeric like "Infinite"
    const numericPart = parseInt(value);
    if (isNaN(numericPart)) {
      setDisplayValue(value);
      return;
    }

    const hasPercent = String(value).includes("%");
    const hasPlus = String(value).includes("+");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const startNum = 0;
          const endNum = numericPart;

          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic: 1 - pow(1 - progress, 3)
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.floor(startNum + (endNum - startNum) * easeOutProgress);

            let formatted = String(currentNum);
            if (hasPlus) formatted += "+";
            if (hasPercent) formatted += "%";

            setDisplayValue(formatted);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              let finalFormatted = String(endNum);
              if (hasPlus) finalFormatted += "+";
              if (hasPercent) finalFormatted += "%";
              setDisplayValue(finalFormatted);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
}
