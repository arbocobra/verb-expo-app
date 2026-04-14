import { useTestStatus } from '@/hooks/useTestStatus';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import Question from './Question';
import Results from './Results';

const TestContainer = ({ selectedCount, resetApp, questions, totalCount, reset, setResetTest }) => {
   const { currentCount, handleResponse, testActive, questionIndexArray, results } = useTestStatus(
      totalCount,
      selectedCount,
      reset,
      setResetTest,
   );

   console.log('question data: ', questions[questionIndexArray[currentCount - 1]]);
   console.log('Q id in index array: ', questionIndexArray[currentCount - 1]);

   if (testActive) {
      return (
         <View style={styles.root}>
            <View style={styles.container}>
               <Header />
               {questions.length && questionIndexArray.length && currentCount ? (
                  <Question
                     question={questions[questionIndexArray[currentCount - 1]]}
                     handleResponse={handleResponse}
                     currentQuestionCount={currentCount}
                     resetApp={resetApp}
                  />
               ) : (
                  <Text>Loading...</Text>
               )}
               {/* <Pressable style={{ border: '1px solid black', padding: 10 }} onPress={resetTest}>
                  <Text style={{ fontSize: 18, fontWeight: 600 }}>Reset</Text>
               </Pressable> */}
               <Footer questionCount={selectedCount} currentCount={currentCount} />
            </View>
         </View>
      );
   } else {
      return <Results results={results} />;
   }
};

export default TestContainer;

const styles = StyleSheet.create({
   root: { padding: 15, flex: 1 },
   container: {
      flex: 1,
   },
   text: {
      fontSize: 18,
      fontWeight: 600,
   },
});
