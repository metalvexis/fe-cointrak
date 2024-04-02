import { useEffect, useRef } from "react";

// create React hook to keep track of previous values
export function usePrevious<T>(value: T): T | null {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
