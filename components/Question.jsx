import { useQuestionFormat } from '@/hooks/useQuestionFormat';
import { StyleSheet, Text, View } from 'react-native';
import Answer from './Answer';
import Hints from './Hints';
import QuestionCard from './QuestionCard';
import Response from './Response';

const Question = ({ question, handleResponse, currentQuestionCount, resetApp }) => {
   const QUESTION = useQuestionFormat(question);
   if (QUESTION) {
      return (
         <View style={styles.container}>
            <QuestionCard QUESTION={QUESTION} />
            <Response handleResponse={handleResponse} reset={resetApp} />
            <Answer />
            <Hints />
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
      border: '1px solid black',
      padding: 10,
      alignContent: 'center',
      flex: 1,
      backgroundColor: 'white',
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
