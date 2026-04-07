import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StyleSheet, Text, View } from 'react-native';

export const Correct = ({ backgroundColor }) => {
   return (
      <View style={styles.answerRow}>
         <View style={[styles.iconContainer, { backgroundColor }]}>
            <FontAwesome6 name='check' size={18} color='white' />
         </View>
         <Text style={styles.text}>Correct</Text>
      </View>
   );
};
export const WrongAccent = ({ correctResponse, backgroundColor }) => {
   return (
      <View style={styles.answerRow}>
         <View style={[styles.iconContainer, { backgroundColor }]}>
            <FontAwesome6 name='xmark' size={18} color='white' />
         </View>
         <Text style={styles.text}>Wrong accent - {correctResponse}</Text>
      </View>
   );
};
export const Incorrect = ({ correctResponse, backgroundColor }) => {
   return (
      <View style={styles.answerRow}>
         <View style={[styles.iconContainer, { backgroundColor }]}>
            <FontAwesome6 name='exclamation' size={18} color='white' />
         </View>
         <Text style={styles.text}>Incorrect - {correctResponse}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   answerRow: { flexDirection: 'row', justifyContent: 'center' },
   text: {
      marginLeft: 10,
      fontSize: 18,
      fontWeight: 600,
   },
   iconContainer: {
      borderRadius: '50%',
      height: 24,
      width: 24,
      justifyContent: 'center',
      alignItems: 'center',
   },
});
