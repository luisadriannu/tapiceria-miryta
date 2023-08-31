import { useState } from "react";

export const useLoader = () => {
  const [loadData, setLoadData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hiddeButton, setHiddeButton] = useState(true);

  const loadWorks = () => {
    setHiddeButton(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoadData(false);
    }, 4000);
  };

  return { loadData, loading, hiddeButton, loadWorks };
};
