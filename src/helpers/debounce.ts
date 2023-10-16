type DebouncedFunction<T> = (this: any, ...args: T[]) => void;

export function debounce<T>(
  func: DebouncedFunction<T>,
  delay: number
): DebouncedFunction<T> {
  let timeout: NodeJS.Timeout;

  return function (...args: T[]) {
    const context = this;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
