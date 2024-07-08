import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    if (typeof title === "string") {
      document.title = title;
    } else {
      console.warn("Title should be a string");
    }
  }, [title]);
};

export default useDocumentTitle;
