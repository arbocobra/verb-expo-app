import { useState } from 'react';

export const useSelectionSubmit = (setSelection, selectionList) => {
   const [isAll, setIsAll] = useState(true);
   
   const handleCheckbox = (value, isSelected, ref) => {
      if (value === 'all') {
         const collection = ref.getElementsByTagName('input');
         selectAll(isSelected, collection);
      } else {
         selectOne(value, isSelected);
      }
   };

   const selectAll = (isSelected, collection) => {
      if (isSelected) {
         setIsAll(true);
         setSelection(['all']);
         for (let i = 1; i < collection.length; i++) {
            collection[i].checked = false;
         }
      } else {
         setIsAll(false);
         let updateFilter = [...selectionList].filter((el) => el !== 'all');
         setSelection(updateFilter);
      }
   };

   const selectOne = (val, isSelected) => {
      if (isSelected) {
         let arr = [...selectionList].filter((el) => el !== 'all');
         arr.push(val);
         setIsAll(false);
         setSelection(arr);
      } else {
         let arr = [...selectionList].filter((el) => el !== val);
         setSelection(arr);
      }
   };

   return {isAll, handleCheckbox}
};