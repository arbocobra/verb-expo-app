// import { tenseSelectionInit, verbSelectionInit } from '@/constants/options';
import { useEffect, useRef, useState } from 'react';

export const useSelectionSubmit = (
   applySelection,
   currentSelection,
   initList,
   selectType,
   reset,
   setSelectionStatus,
) => {
   // const listRef = useRef(initList);
   const listRef = useRef(initList.map((item) => ({ ...item })));
   const [optionList, setOptionList] = useState(initList.map((item) => ({ ...item })));
   const handleCheckbox = (id) => {
      const isSelected = optionList[id].isChecked; // if alreadt checked option is being *UNSELECTED*
      if (id === 0) {
         selectAll(isSelected);
      } else {
         selectOne(id, isSelected);
      }
   };

   const selectAll = (isSelected) => {
      if (isSelected) {
         if (currentSelection.length > 1) {
            const updateList = [...optionList];
            updateList[0].isChecked = false;
            setOptionList(updateList);
         }
      } else {
         setOptionList((current) =>
            current.map((val, i) => (i === 0 ? { ...val, isChecked: true } : { ...val, isChecked: false })),
         );
      }
   };

   const selectOne = (id, isSelected) => {
      if (isSelected) {
         if (currentSelection.length > 1) {
            const updateList = [...optionList];
            updateList[id].isChecked = false;
            setOptionList(updateList);
         }
      } else {
         const updateList = [...optionList];
         const allChecked = optionList[0].isChecked;
         if (allChecked) {
            updateList[0].isChecked = false;
         }
         // updateList[id].isChecked = true;
         const count = updateList.filter((el) => el.isChecked).length;
         if (count === optionList.length - 2) {
            setOptionList((current) =>
               current.map((val, i) => (i === 0 ? { ...val, isChecked: true } : { ...val, isChecked: false })),
            );
         } else {
            updateList[id].isChecked = true;
            setOptionList(updateList);
         }
      }
   };

   const resetInitialState = () => {
      setOptionList(listRef.current.map((item) => ({ ...item })));
      setSelectionStatus(true);
      console.log('getInitialState ran ', selectType);
   };

   useEffect(() => {
      console.log('first render ', selectType);
   }, []);

   useEffect(() => {
      if (reset) {
         console.log('optionList changed - reset ', optionList);
      } else {
         console.log('optionList changed - applySelection ran ', selectType);
         const submitSelection = [...optionList].filter((el) => el.isChecked).map((val) => val.value);
         applySelection(selectType, submitSelection);
      }
   }, [optionList]);

   useEffect(() => {
      if (reset) {
         console.log('I reset - useSelectionSubmit, ', selectType);
         // const initListState = selectType === 'tense' ? [...tenseSelectionInit] : [...verbSelectionInit];
         // setOptionList(initListState);
         resetInitialState();
      }
   }, [reset]);

   // useEffect(() => {
   //    renderRef.current = renderRef.current + 1;
   //    console.log(`selectionSubmit: ${selectType} render `, renderRef.current);
   //    const vals = { optionList, currentSelection, selectType, reset };
   //    console.log(vals);
   // });

   return { handleCheckbox, optionList };
};
