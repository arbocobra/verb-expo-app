import { useTheme } from '@/app/ThemeContext';
import { useHintAnimation } from '@/hooks/useHintAnimation';
import { useHintDatabase } from '@/hooks/useReadOnlyDatabase';
import { StyleSheet, Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const Hints = ({ id, pronoun }) => {
   const { infinitive, tense, value } = useHintDatabase(id);
   const hintText = `Tense: ${tense} || Pronoun: ${pronoun} || Infinitive: ${infinitive}`;
   const { hintAnimatedStyle, arrowAnimatedStyle, tapHintA, tapHintB, displayText } = useHintAnimation(
      hintText,
      value,
      id,
   );
   const { theme } = useTheme();

   return (
      <View style={styles.container}>
         <Animated.View style={[hintAnimatedStyle, styles.hintContainer, { backgroundColor: theme.tertiary }]}>
            <Text style={styles.hintText}>{displayText}</Text>
         </Animated.View>
         <View style={styles.arrowContainer}>
            <Animated.View style={[styles.arrow, arrowAnimatedStyle, { borderTopColor: theme.tertiary }]} />
         </View>
         <View style={styles.hintRow}>
            <GestureDetector gesture={tapHintA}>
               <View style={[styles.buttonContainer, { backgroundColor: theme.tertiary }]}>
                  <Text style={styles.text}>Hint 1</Text>
               </View>
            </GestureDetector>
            <GestureDetector gesture={tapHintB}>
               <View style={[styles.buttonContainer, { backgroundColor: theme.tertiary }]}>
                  <Text style={styles.text}>Hint 2</Text>
               </View>
            </GestureDetector>
         </View>
      </View>
   );
};

export default Hints;

const styles = StyleSheet.create({
   container: {
      justifyContent: 'flex-end',
      flex: 1,
   },
   hintRow: { flexDirection: 'row', justifyContent: 'space-between' },
   buttonContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      width: '30%',
      height: 50,
   },
   hintContainer: { marginBottom: -1, justifyContent: 'center' },
   text: {
      fontSize: 18,
      fontWeight: 600,
      textAlign: 'center',
   },
   arrow: {
      width: 0,
      height: 0,
      borderRightWidth: 15,
      borderLeftWidth: 15,
      borderTopWidth: 13,
      borderRightColor: 'transparent',
      borderLeftColor: 'transparent',
   },
   arrowContainer: { width: '100%', height: 13, containerType: 'size' },
   hintText: { fontSize: 18, fontWeight: 600, textTransform: 'capitalize' },
});
