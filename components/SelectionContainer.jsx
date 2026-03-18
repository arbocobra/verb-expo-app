import { useSelection } from '@/hooks/useSelection';
import { StyleSheet, Text, View } from 'react-native';

const SelectionContainer = ({ updateDisplay, tense, verb, applyFilter }) => {
   const { displayTense, displayVerb, submitState, submitSelection, updateSelection } = useSelection(updateDisplay);
   // console.log(submitState);
   const bodyText = [
      'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      'Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean.',
      'Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora.',
      'Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus.',
   ];
   return (
      <View>
         <Text style={styles.title}>Selection Container</Text>
         {/* <Text>{submitState}</Text> */}
         {/* <View id='container' style={[styles.container, submitState === 2 ? cStyles.hidden : cStyles.display]}> */}
         <View style={styles.container}>
            <View id='inner-container' style={styles.innerContainer}>
               {/* <View id='body-text' style={[styles.bodyText, submitState === 2 ? cStyles.hidden : cStyles.display]}> */}
               <View id='body-text' style={styles.bodyText}>
                  {/* {bodyText.map((el, i) => (
                     <Text key={`body-text-${i}`}>{el}</Text>
                  ))} */}
               </View>
               <View style={styles.tenseButton}>
                  <Text>Tense Button</Text>
               </View>
               <View style={styles.verbButton}>
                  <Text>Verb Button</Text>
               </View>
               <View style={styles.startButton}>
                  <Text>Start Button</Text>
               </View>
            </View>
         </View>
      </View>
   );
};

export default SelectionContainer;

const styles = StyleSheet.create({
   title: { fontSize: 24, textAlign: 'center', fontWeight: 600 },
   container: { flex: 1, backgroundColor: 'red' },
   innerContainer: { position: 'relative', flex: 1, zIndex: 1, backgroundColor: 'blue' },
   bodyText: { flex: 1, gap: 10, position: 'absolute', top: 0, bottom: 0, width: '100%', backgroundColor: 'green' },
   tenseButton: {},
   verbButton: {},
   startButton: {},
});

const cStyles = StyleSheet.create({
   hidden: { display: 'none' },
   display: { display: 'inherit' },
});
