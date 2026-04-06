import { useState } from 'react';
export const useQuestionFormat = (question) => {
   console.log(question);
   // const [loading, setLoading] = useState(true);
   const [QUESTION, setQUESTION] = useState({
      id: question.id,
      conjugationEN: question.conjugation_e,
      conjugationPR: question.conjugation_p,
      pronounEN: question.pronoun_e,
      pronounPR: question.pronoun_p,
      infinitiveEN: question.infinitive_e,
      infinitivePR: question.infinitive_p,
      tense: question.tense,
      isPlural: question.plural > 0,
      isNegative: question.negative > 0,
      isFormal: question.formal > 0,
      isTemporary: question.temporary > 0,
      isImperative: question.tense === 'imperative',
      hint: question.hint_id,
   });

   // useEffect(() => {
   //    if (question && loading) {
   //       let updateQuestion = {
   //          id: question.id,
   //          conjugationEN: question.conjugation_e,
   //          conjugationPR: question.conjugation_p,
   //          pronounEN: question.pronoun_e,
   //          pronounPR: question.pronoun_p,
   //          infinitiveEN: question.infinitive_e,
   //          infinitivePR: question.infinitive_p,
   //          tense: question.tense,
   //          isPlural: question.plural > 0,
   //          isNegative: question.negative > 0,
   //          isFormal: question.formal > 0,
   //          isTemporary: question.temporary > 0,
   //          isImperative: question.tense === 'imperative',
   //          hint: question.hint_id,
   //       };
   //       setQUESTION(updateQuestion);
   //       setLoading(false);
   //    }
   // }, [loading]);

   return QUESTION;
};
