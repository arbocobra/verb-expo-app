import { useTheme } from '@/app/ThemeContext';
import { StyleSheet, View } from 'react-native';
import { Correct, Incorrect, WrongAccent } from './ui/AnswerIcons';

const Answer = ({ QUESTION, resultId }) => {
   const { conjugationPR, pronounPR, isImperative } = QUESTION;
   const { theme } = useTheme();
   const correctResponse = isImperative ? `${conjugationPR}!` : `${pronounPR} ${conjugationPR}`;

   return (
      <View style={styles.container}>
         {resultId === 0 ? (
            <Correct backgroundColor={theme.secondary} />
         ) : resultId === 1 ? (
            <WrongAccent correctResponse={correctResponse} backgroundColor={theme.tertiary} />
         ) : resultId === 2 ? (
            <Incorrect correctResponse={correctResponse} backgroundColor={theme.primary} />
         ) : null}
      </View>
   );
};

export default Answer;

const styles = StyleSheet.create({
   container: {
      // marginVertical: 20,
   },
});
