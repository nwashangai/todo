import { useEffect, useState } from "react"

export const useClipboard = <T extends number | string>(defaultText: T) => {
  const [text, setText] = useState<T>(defaultText)

  const copyText = (callback?: (value: T) => void) => {
    navigator.clipboard.writeText(`${text}`)
    callback?.(text)
  }

  useEffect(() => {
    setText(defaultText)
  }, [defaultText])

  return { text, setText, copyText }
}

export default useClipboard
