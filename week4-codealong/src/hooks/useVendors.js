import { useState, useEffect, useCallback } from 'react';
import vendorsData from '../data/vendors'; // <-- Import your local static vendors data

export function useVendors() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVendors = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Try fetching from a local JSON server or endpoint if you have one running
      const response = await fetch('http://localhost:5000/vendors');
      if (!response.ok) throw new Error('Failed to fetch vendors');
      const data = await response.json();
      setVendors(data);
    } catch (err) {
      console.warn('API fetch failed, falling back to local static data:', err.message);
      // Fallback seamlessly to your local mock data file so the app doesn't break!
      setVendors(vendorsData);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVendors();
  }, [fetchVendors]);

  return { vendors, loading, error, reload: fetchVendors };
}