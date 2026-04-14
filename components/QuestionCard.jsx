import { useTheme } from '@/app/ThemeContext';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { QuestionDetails } from './ui/QuestionDetails';

const QuestionCard = ({ QUESTION, currentQuestionCount }) => {
   const { theme } = useTheme();
   const { conjugationEN, pronounEN, isPlural, isNegative, isFormal, isImperative, isTemporary } = QUESTION;
   const innerText = isImperative ? `${conjugationEN}!` : `${pronounEN} ${conjugationEN}`;

   const conditionalStyles =
      currentQuestionCount % 3 === 1
         ? {
              cardBg: {
                 a: { backgroundColor: theme.primary },
                 b: { backgroundColor: theme.tertiary },
                 c: { backgroundColor: theme.secondary },
              },
              cardText: { color: 'white' },
              questionDetails: theme.primaryLight,
           }
         : currentQuestionCount % 3 === 2
           ? {
                cardBg: {
                   a: { backgroundColor: theme.tertiary },
                   b: { backgroundColor: theme.secondary },
                   c: { backgroundColor: theme.primary },
                },
                cardText: { color: '#333' },
                questionDetails: theme.tertiaryDark,
             }
           : {
                cardBg: {
                   a: { backgroundColor: theme.secondary },
                   b: { backgroundColor: theme.primary },
                   c: { backgroundColor: theme.tertiary },
                },
                cardText: { color: '#333' },
                questionDetails: theme.secondaryDark,
             };

   const displayConditionsDetails = [
      { value: 'negative', isTrue: isNegative, icon: 'thumbs-down' },
      { value: 'plural', isTrue: isPlural, icon: 'people-group' },
      { value: 'formal', isTrue: isFormal, icon: 'black-tie' },
      { value: 'temporary', isTrue: isTemporary, icon: 'stopwatch' },
      // { value: 'imperative', isTrue: isImperative, icon: 'volume-high' },
   ];

   const displayConditions = displayConditionsDetails
      .filter((el) => el.isTrue)
      .concat(displayConditionsDetails.filter((el) => !el.isTrue));

   const renderItem = ({ item, index }) => (
      <QuestionDetails
         key={`display-condition-${index}`}
         value={item.value}
         iconName={item.icon}
         isTrue={item.isTrue}
         colorBg={conditionalStyles.questionDetails}
      />
   );

   return (
      <View style={styles.container}>
         <View style={[styles.boxC, conditionalStyles.cardBg.c]} />
         <View style={[styles.boxB, conditionalStyles.cardBg.b]} />
         <View style={[styles.boxA, conditionalStyles.cardBg.a]}>
            <Text style={[styles.questionText, conditionalStyles.cardText]}>{innerText}</Text>
         </View>
         <View style={styles.infoContainer}>
            <FlatList
               contentContainerStyle={styles.infoRow}
               numColumns={4}
               data={displayConditions}
               renderItem={renderItem}
               columnWrapperStyle={styles.infoColumn}
            />
         </View>
      </View>
   );
};
export default QuestionCard;

const styles = StyleSheet.create({
   container: {
      height: 320,
      alignItems: 'center',
   },
   boxC: {
      height: 15,
      marginVertical: 5,
      width: '80%',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
   },
   boxB: { height: 15, width: '90%', marginVertical: 5, borderTopRightRadius: 10, borderTopLeftRadius: 10 },
   boxA: { flex: 1, width: '100%', marginVertical: 5, borderRadius: 15, justifyContent: 'center' },
   questionText: {
      fontSize: 22,
      fontWeight: 600,
      textTransform: 'uppercase',
      textAlign: 'center',
   },
   infoContainer: {
      width: '100%',
      marginVertical: 15,
   },
   infoRow: {
      width: '100%',
      justifyContent: 'space-between',
      // height: 48,
   },
   infoColumn: { justifyContent: 'space-evenly' },
});
