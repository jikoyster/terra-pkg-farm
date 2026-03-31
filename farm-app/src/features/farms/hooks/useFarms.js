import { useEffect, useState } from "react";
import * as farmService from "../services/farmService";

export default function useFarms() {
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFarms = async () => {
    try {
      const data = await farmService.getFarms();
      setFarms(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  return { farms, loading, refresh: fetchFarms };
}