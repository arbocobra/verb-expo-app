import { useEffect, useState } from 'react';

export const useSelectionSubmit = (applySelection, currentSelection, initList, selectType) => {
   const [optionList, setOptionList] = useState(initList);
   // const [isAll, setIsAll] = useState(true);
   const [displayAlert, setDisplayAlert] = useState(false);

   const handleCheckbox = (id) => {
      // console.log('handleCheckbox: ', value);
      // console.log('optionList: ', currentSelection);
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

   useEffect(() => {
      const submitSelection = [...optionList].filter((el) => el.isChecked).map((val) => val.value);
      applySelection(selectType, submitSelection);
   }, [optionList]);

   return { handleCheckbox, optionList };
};

export const useCountSubmit = () => {};
