import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

export const useReadOnlyDatabase = () => {
   const db = useSQLiteContext();
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const allData = await db.getAllAsync('SELECT * FROM verbs');
         setData(allData);
      };

      fetchData();
   }, []);

   return data;
};

/**
 * 
 * const db = useSQLiteContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data (read operation only)
    async function fetchData() {
      const allData = await db.getAllAsync('SELECT * FROM items');
      setData(allData);
    }
    fetchData();
  }, [db]);

  // Expose only read functionality and data
  return {
    data,
    getItem: async (id) => {
      return await db.getFirstAsync('SELECT * FROM items WHERE id = ?', [id]);
    },
 */
