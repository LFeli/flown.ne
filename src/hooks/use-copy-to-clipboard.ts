'use client'

import React from 'react'

interface useCopyToClipboardProps {
  timeout?: number
  onCopy?: () => void
}

export function useCopyToClipboard({
  timeout = 2000,
  onCopy,
}: useCopyToClipboardProps) {
  const [isCopied, setIsCopied] = React.useState(false)

  /**
   * Function that copy value to user clipboard, and with custom settings `timeout` and `onCopy` action for using in anyway case.
   * @param value literally is a value that to copy to clipboard
   * @returns
   */
  async function copyToClipboard(value: string) {
    if (typeof window === 'undefined' || !navigator.clipboard.writeText) {
      return
    }

    if (!value) {
      return
    }

    try {
      await navigator.clipboard.writeText(value)
      setIsCopied(true)

      if (onCopy) {
        onCopy()
      }

      setTimeout(() => setIsCopied(false), timeout)
    } catch (error) {
      console.error(error)
    }
  }

  return { isCopied, copyToClipboard }
}
