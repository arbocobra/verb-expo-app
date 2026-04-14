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

export const useDatabase = (reset) => {
   const db = useSQLiteContext();

   const [filteredData, setFilteredData] = useState([]);
   const [totalCount, setTotalCount] = useState(0);

   const getQueryString = (isAllTense, isAllVerbs, tense, verbs) => {
      if (isAllTense && isAllVerbs) {
         return 'SELECT * FROM verbs';
      }
      if (!isAllTense && isAllVerbs) {
         const tenseString = tense.map((item) => `'${item}'`).join(', ');
         return `SELECT * FROM verbs WHERE tense IN (${tenseString})`;
      }
      if (isAllTense && !isAllVerbs) {
         const verbString = verbs.map((item) => `'${item}'`).join(', ');
         return `SELECT * FROM verbs WHERE infinitive_p IN (${verbString})`;
      }
      if (!isAllTense && !isAllVerbs) {
         const tenseString = tense.map((item) => `'${item}'`).join(', ');
         const verbString = verbs.map((item) => `'${item}'`).join(', ');

         return `SELECT * FROM verbs WHERE tense IN (${tenseString}) AND infinitive_p IN (${verbString})`;
      }
   };

   const fetchData = async (t, v) => {
      const queryString = getQueryString(t[0] === 'all', v[0] === 'all', t, v);
      const filtered = await db.getAllAsync(queryString);
      setFilteredData(filtered);
   };

   useEffect(() => {
      setTotalCount(filteredData.length);
   }, [filteredData]);

   useEffect(() => {
      if (reset) {
         setFilteredData([]);
         setTotalCount(0);
      }
   }, [reset]);

   // useEffect(() => {
   //    const fetchData = async () => {
   //       const queryString = getQueryString(tense[0] === 'all', verbs[0] === 'all')
   //       const filtered = await db.getAllAsync(queryString);
   //       // let testTense = ['past', 'present'];
   //       // let testVerbs = ['ter', 'ser', 'ver'];
   //       // let tenseString = tense.map((item) => `"${item}"`).join(', ');
   //       // let verbString = verbs.map((item) => `"${item}"`).join(', ');
   //       // const filtered = await db.getAllAsync(
   //       //    `SELECT * FROM verbs WHERE tense IN (${tenseString}) AND infinitive_p IN (${verbString})`,
   //       // );
   //       setFilteredData(filtered);
   //    };

   //    fetchData();
   // }, []);

   // useEffect(() => {
   //    if (data.length) {
   //       const filtered = getFilteredData();
   //       setFilteredData(filtered);
   //    }
   // }, [tense, verbs]);

   // useEffect(() => {
   //    if (filteredData.length) setTotalCount(filteredData.length);
   // }, [filteredData]);

   // useEffect(() => {
   //    renderRef.current = renderRef.current + 1;
   //    console.log('database render ', renderRef.current);
   //    const vals = { tense, verbs, filteredData, totalCount, reset };
   //    console.log(vals);
   // });

   return { totalCount, filteredData, fetchData };
};

export const useHintDatabase = (id) => {
   const db = useSQLiteContext();
   const [hint, setHint] = useState({});
   useEffect(() => {
      const fetchData = async () => {
         const data = await db.getAllAsync(`SELECT * FROM hints WHERE id = ${id}`);
         setHint(data[0]);
      };

      fetchData();
   }, [id]);
   return hint;
};
