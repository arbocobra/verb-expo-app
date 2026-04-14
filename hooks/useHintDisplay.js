import { useEffect, useState } from 'react';
import { useHintDatabase } from './useReadOnlyDatabase';

export const useHintDisplay = (QUESTION) => {
   const { hint: id, tense, pronounPR, infinitivePR } = QUESTION;
   const { value } = useHintDatabase(id);
   const [displayText, setDisplayText] = useState('');

   useEffect(() => {
      setDisplayText('');
   }, [id]);

   const updateHintText = (val) => {
      if (val === 0) setDisplayText('');
      else if (val === 1) setDisplayText(`Tense: ${tense}  |  Pronoun: ${pronounPR}  |  Infinitive: ${infinitivePR}`);
      else if (val === 2) setDisplayText(value);
      else setDisplayText('');
   };

   return { id, displayText, updateHintText };
};
