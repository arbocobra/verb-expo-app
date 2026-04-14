import { useQuestionFormat } from '@/hooks/useQuestionFormat';
import { useSubmitResponse } from '@/hooks/useSubmitResponse';
import { Keyboard, Pressable, StyleSheet, Text, View } from 'react-native';
import Answer from './Answer';
import Hints from './Hints';
import QuestionCard from './QuestionCard';
import Response from './Response';

const Question = ({ question, handleResponse, currentQuestionCount, resetApp }) => {
   const QUESTION = useQuestionFormat(question, currentQuestionCount);
   const { resultId, handleSubmit } = useSubmitResponse(QUESTION, handleResponse);

   if (QUESTION) {
      return (
         <View style={styles.container}>
            <Pressable style={{ display: 'flex', flex: 1 }} onPress={Keyboard.dismiss}>
               <QuestionCard QUESTION={QUESTION} currentQuestionCount={currentQuestionCount} />
               <Response isImperative={QUESTION.isImperative} pronoun={QUESTION.pronounPR} submit={handleSubmit} />
               <Answer QUESTION={QUESTION} resultId={resultId} />
               <Hints QUESTION={QUESTION} />
            </Pressable>
         </View>
      );
   } else
      return (
         <View>
            <Text>Loading...</Text>
         </View>
      );
};

export default Question;

const styles = StyleSheet.create({
   container: {
      // height: 'auto',
      // width: '100%',
      // display: 'flex',
      // flexDirection: 'column',
      padding: 20,
      alignContent: 'center',
      flex: 1,
      backgroundColor: 'white',
      boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.4)',
   },
   text: {
      fontSize: 18,
      fontWeight: 600,
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
});
