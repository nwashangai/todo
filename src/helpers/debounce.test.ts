import { debounce } from './debounce';

describe('debounce function', () => {
  let mockFunction: jest.Mock;
  let debouncedFunction: ReturnType<typeof debounce>;
  const delay = 100;

  beforeEach(() => {
    jest.useFakeTimers();
    mockFunction = jest.fn();
    debouncedFunction = debounce(mockFunction, delay);
  });

  it('should call the debounced function once after waiting', () => {
    debouncedFunction();

    jest.advanceTimersByTime(delay);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should not call the debounced function before waiting', () => {
    debouncedFunction();

    jest.advanceTimersByTime(delay - 1);

    expect(mockFunction).toHaveBeenCalledTimes(0);
  });

  it('should reset the timer when called multiple times', () => {
    debouncedFunction();

    jest.advanceTimersByTime(delay - 1);

    debouncedFunction();

    jest.advanceTimersByTime(delay - 1);

    expect(mockFunction).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(1);

    // Ensure the debounced function is called only once
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should pass arguments to the debounced function', () => {
    const arg1 = 'argument1';
    const arg2 = 42;
    debouncedFunction(arg1, arg2);

    jest.advanceTimersByTime(delay);

    expect(mockFunction).toHaveBeenCalledWith(arg1, arg2);
  });
});
