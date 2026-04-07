import { useEffect, useState } from 'react';

export const useTestStatus = (totalCount, selectedCount, reset, setResetTest) => {
   const [currentCount, setCurrentCount] = useState(1);
   const [results, setResults] = useState({ correct: [], incorrect: [] });
   const [isFinal, setIsFinal] = useState(false);
   const [questionIndexArray, setQuestionIndexArray] = useState([]);
   const [testActive, setTestActive] = useState(true);

   const handleResponse = (isCorrectAnswer, val) => {
      let countRef = currentCount;
      let resultsRef = { ...results };

      if (isCorrectAnswer) {
         let updateResults = [...resultsRef.correct, val];
         setResults({ ...results, correct: updateResults });
      } else {
         let updateResults = [...resultsRef.incorrect, val];
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
         resetTestState();
      }
   }, [reset]);

   return { currentCount, handleResponse, testActive, questionIndexArray, results };
};
