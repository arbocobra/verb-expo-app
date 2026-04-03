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

export const useDatabase = (tense, verbs) => {
   const db = useSQLiteContext();
   const [data, setData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   const [count, setCount] = useState(0);

   const getFilteredData = (allData) => {
      let tenseFilteredData, verbFilteredData;
      if (tense[0] === 'all') {
         tenseFilteredData = [...allData];
      } else {
         tenseFilteredData = [...allData].filter((item) => tense.includes(item.tense));
      }

      if (verbs[0] === 'all') {
         verbFilteredData = [...tenseFilteredData];
      } else {
         verbFilteredData = [...tenseFilteredData].filter((item) => verbs.includes(item.infinitive_p));
      }

      setCount(verbFilteredData.length);
      return verbFilteredData;
   };

   const randomizeQuestions = (max = null) => {
      const indexArray = Array.from({ length: count }, (_, i) => i);
      for (let i = indexArray.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [indexArray[i], indexArray[j]] = [indexArray[j], indexArray[i]];
      }

      return max ? indexArray.slice(0, max) : indexArray;
   };

   useEffect(() => {
      const fetchData = async () => {
         const allData = await db.getAllAsync('SELECT * FROM verbs');
         //  const filteredData = getFilteredData(allData);
         setData(allData);
      };

      fetchData();
   }, []);

   useEffect(() => {
      if (data.length) {
         const fData = getFilteredData(data);
         setFilteredData(fData);
         //  console.log(fData);
      }
   }, [tense, verbs]);

   return { filteredData, count, randomizeQuestions };
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
