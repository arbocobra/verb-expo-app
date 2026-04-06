import { useEffect, useState } from 'react';

export const useUpdateDisplay = () => {
   const [displayActive, setDisplayActive] = useState(false);
   const [tenseFilter, setTenseFilter] = useState(['all']);
   const [verbFilter, setVerbFilter] = useState(['all']);
   const [selectedCount, setSelectedCount] = useState(0);
   const [questions, setQuestions] = useState([]);
   const [reset, setReset] = useState(false);
   const [resetTest, setResetTest] = useState(false);
   const [resetSelection, setResetSelection] = useState(false);

   const resetDisplay = () => {
      setDisplayActive(false);
      setTenseFilter(['all']);
      setVerbFilter(['all']);
      setSelectedCount(0);
      setQuestions([]);
      setReset(false);
      setResetTest(false);
      setResetSelection(false);
   };

   const completeSelection = (data, count) => {
      setQuestions(data);
      setSelectedCount(count);
      setDisplayActive(true);
   };

   const resetApp = () => {
      setReset(true);
   };

   const applyFilter = (filter, value) => {
      if (filter === 'tense') setTenseFilter(value);
      else if (filter === 'verb') setVerbFilter(value);
   };

   useEffect(() => {
      if (resetTest) {
         setDisplayActive(false);
      }
   }, [resetTest]);

   useEffect(() => {
      if (resetSelection) {
         resetDisplay();
      }
   }, [resetSelection]);

   return {
      isActive: displayActive,
      completeSelection,
      resetApp,
      applyFilter,
      tense: tenseFilter,
      verb: verbFilter,
      questions,
      selectedCount,
      reset,
      setResetTest,
      setResetSelection,
   };
};
