import { useCallback, useRef } from "react";

const useDebouncedCallback = <
  Cb extends (...args: Parameters<Cb>) => ReturnType<Cb>
>(
  func: Cb,
  wait: number
): Cb => {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: Parameters<Cb>) => {
      const later = () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        func(...args);
      };

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(later, wait);
    },
    [func, wait]
  ) as Cb;
};

export { useDebouncedCallback };
