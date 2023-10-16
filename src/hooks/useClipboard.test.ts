import { renderHook, act } from '@testing-library/react-hooks';
import useClipboard from './useClipboard';

describe('useClipboard custom hook', () => {
  it('should set the default text', () => {
    const { result } = renderHook(() => useClipboard('Initial Text'));
    expect(result.current.text).toBe('Initial Text');
  });

  it('should update the text', () => {
    const { result } = renderHook(() => useClipboard('Initial Text'));

    act(() => {
      result.current.setText('Updated Text' as any);
    });

    expect(result.current.text).toBe('Updated Text');
  });

  it('should copy text to clipboard', async () => {
    const { result } = renderHook(() => useClipboard('Copy This Text'));

    // Mock the clipboard API
    const clipboardWriteTextMock = jest.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: clipboardWriteTextMock,
      },
    });

    // Copy text
    act(() => {
      result.current.copyText();
    });

    expect(clipboardWriteTextMock).toHaveBeenCalledWith('Copy This Text');
  });

  it('should invoke the callback when copying text', () => {
    const { result } = renderHook(() => useClipboard('Copy This Text'));

    const callback = jest.fn();

    act(() => {
      result.current.copyText(callback);
    });

    expect(callback).toHaveBeenCalledWith('Copy This Text');
  });
});
