import { useTheme } from '@/app/ThemeContext';
import { useHintAnimation } from '@/hooks/useHintAnimation';
import { useHintDisplay } from '@/hooks/useHintDisplay';
import { StyleSheet, Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedRef } from 'react-native-reanimated';

const Hints = ({ QUESTION }) => {
   const { id, displayText, updateHintText } = useHintDisplay(QUESTION);
   const arrowRef = useAnimatedRef();
   const { hintAnimatedStyle, arrowAnimatedStyle, tapHintA, tapHintB } = useHintAnimation(id, arrowRef, updateHintText);
   const { theme } = useTheme();

   return (
      <View style={styles.container}>
         <Animated.View style={[hintAnimatedStyle, styles.hintContainer, { backgroundColor: theme.tertiary }]}>
            <Text style={styles.hintText}>{displayText}</Text>
         </Animated.View>
         <Animated.View ref={arrowRef} style={styles.arrowContainer}>
            <Animated.View style={[styles.arrow, arrowAnimatedStyle, { borderTopColor: theme.tertiary }]} />
         </Animated.View>
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
   arrowContainer: { width: '100%', height: 13 },
   hintText: { fontSize: 18, fontWeight: 600, textTransform: 'capitalize' },
});
