import { useEffect, useState } from 'react';

export const useTestStatus = (totalCount, selectedCount, reset, setResetTest) => {
   const [currentCount, setCurrentCount] = useState(1);
   const [results, setResults] = useState({ correct: [], incorrect: [] });
   const [isFinal, setIsFinal] = useState(false);
   const [questionIndexArray, setQuestionIndexArray] = useState([]);
   const [testActive, setTestActive] = useState(true);

   const handleResponse = (bool, val) => {
      let countRef = currentCount;
      let resultRef = { ...results };

      if (bool) {
         let updateResults = [...resultRef.correct, `${currentCount} / ${selectedCount} - ${val} - correct`];
         setResults({ ...results, correct: updateResults });
      } else {
         let updateResults = [...resultRef.incorrect, `${currentCount} / ${selectedCount} - ${val} - not correct`];
         setResults({ ...results, incorrect: updateResults });
      }
      if (isFinal) {
         setTestActive(false);
      } else {
         setCurrentCount(countRef + 1);
      }
   };

   useEffect(() => {
      if (currentCount > 0 && currentCount === selectedCount) setIsFinal(true);
   }, [currentCount, selectedCount]);

   useEffect(() => {
      const indexArray = Array.from({ length: totalCount }, (_, i) => i);
      for (let i = indexArray.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [indexArray[i], indexArray[j]] = [indexArray[j], indexArray[i]];
      }
      if (selectedCount) setQuestionIndexArray(indexArray.slice(0, selectedCount));
      else setQuestionIndexArray(indexArray);
   }, [selectedCount]);

   const resetTestState = () => {
      setCurrentCount(1);
      setResults({ correct: [], incorrect: [] });
      setIsFinal(false);
      setQuestionIndexArray([]);
      setTestActive(true);
      setResetTest(true);
   };

   useEffect(() => {
      if (reset) {
         console.log('I reset - useTestState');
         resetTestState();
      }
   }, [reset]);

   return { currentCount, handleResponse, testActive, questionIndexArray, results };
};
