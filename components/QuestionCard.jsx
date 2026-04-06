import { useTheme } from '@/app/ThemeContext';

import { StyleSheet, Text, View } from 'react-native';

const QuestionCard = ({ QUESTION }) => {
   const { theme } = useTheme();
   const { id, conjugationEN, pronounEN, tense, isPlural, isNegative, isFormal, isImperative } = QUESTION;
   const innerText = isImperative ? `${conjugationEN}!` : `${pronounEN} ${conjugationEN}`;

   console.log(QUESTION);
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Question Card</Text>
         <Text style={styles.questionText}>{innerText}</Text>
      </View>
   );
};
export default QuestionCard;

const styles = StyleSheet.create({
   container: {
      padding: 10,
      border: '1px solid black',
   },
   text: {
      fontSize: 18,
      fontWeight: 600,
   },
   questionText: {
      fontSize: 22,
      fontWeight: 600,
      fontStyle: 'italic',
      textAlign: 'center',
   },
});
