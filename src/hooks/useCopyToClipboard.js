import { useCallback, useState } from "react";

// Fallback method to copy text using a hidden textarea
function oldWayToCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.style.display = "none";
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copyToClipboard = useCallback((value) => {
    const handleCopy = async () => {
      try {
        // Check if navigator.clipboard.writeText is available and use it
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
        } else {
          // Fallback to old method if writeText is not available
          oldWayToCopy(value);
        }
        setCopiedText(value); // Update state with the copied value
      } catch (e) {
        console.error("Failed to copy text:", e);
      }
    };

    handleCopy();
  }, []);

  return [copiedText, copyToClipboard];
};

export default useCopyToClipboard;
