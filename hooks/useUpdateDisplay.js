import { useState } from 'react';

export const useUpdateDisplay = () => {
   const [displayActive, setDisplayActive] = useState(false);
   const [tenseFilter, setTenseFilter] = useState(['all']);
   const [verbFilter, setVerbFilter] = useState(['all']);

   const updateDisplay = () => {
      console.log('i ran');
      setDisplayActive(true);
   };

   const resetDisplay = () => {
      setTenseFilter(['all']);
      setVerbFilter(['all']);
      setDisplayActive(false);
   };

   const applyFilter = (filter, value) => {
      if (filter === 'tense') setTenseFilter(value);
      else if (filter === 'verb') setVerbFilter(value);
   };

   return { isActive: displayActive, updateDisplay, resetDisplay, applyFilter, tense: tenseFilter, verb: verbFilter };
};
