import { useEffect, useState } from 'react';

export const useSubmitResponse = (QUESTION, handleResponse) => {
   const [resultId, setResultId] = useState(null);
   const { conjugationPR, pronounPR, isImperative } = QUESTION;
   const fullAnswer = isImperative ? conjugationPR : `${pronounPR} ${conjugationPR}`;

   const checkAnswer = (submitted, correct) => {
      if (submitted === correct) return 0;
      else {
         const normalizeSubmit = removeDiacritics(submitted);
         const normalizeCorrect = removeDiacritics(correct);
         if (normalizeSubmit === normalizeCorrect) return 1;
         else return 2;
      }
   };

   const removeDiacritics = (str) => {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
   };

   const handleSubmit = (val) => {
      const id = checkAnswer(val, conjugationPR);
      setResultId(id);
   };

   useEffect(() => {
      if (resultId === 0) {
         setTimeout(() => {
            handleResponse(true, fullAnswer);
            setResultId(null);
         }, 1500);
      } else if (resultId > 0) {
         setTimeout(() => {
            handleResponse(false, fullAnswer);
            setResultId(null);
         }, 3500);
      }
   }, [fullAnswer, handleResponse, resultId]);

   return { resultId, handleSubmit };
};
