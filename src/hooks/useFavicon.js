import { useEffect } from "react";

const useFavicon = (initialUrl) => {
  const setFavicon = (url) => {
    let favicon = document.querySelector('link[rel="icon"]');

    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }

    favicon.href = url;
  };

  useEffect(() => {
    if (initialUrl) {
      setFavicon(initialUrl);
    }
  }, [initialUrl]);

  return setFavicon;
};

export default useFavicon;
