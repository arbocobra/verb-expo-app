import { useEffect, useState } from 'react';

export const useSelectionStatus = (setResetSelection, reset) => {
   const [resetTenseSelection, setResetTenseSelection] = useState(false);
   const [resetVerbSelection, setResetVerbSelection] = useState(false);
   const [displayStart, setDisplayStart] = useState(false);

   useEffect(() => {
      if (resetTenseSelection && resetVerbSelection) {
         setResetSelection(true);
      }
   }, [resetTenseSelection, resetVerbSelection]);

   useEffect(() => {
      if (!reset) {
         setResetTenseSelection(false);
         setResetVerbSelection(false);
      }
   }, [reset]);

   return { displayStart, setDisplayStart, setResetTenseSelection, setResetVerbSelection };
};
