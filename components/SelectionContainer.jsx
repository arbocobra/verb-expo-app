import { useTheme } from '@/app/ThemeContext';
import { useSelectionAnimation } from '@/hooks/useSelectionAnimation';
import { useSelectionStatus } from '@/hooks/useSelectionStatus';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import SelectCount from './SelectCount';
import SelectTense from './SelectTense';
import SelectVerb from './SelectVerbs';

const SelectionContainer = ({ completeSelection, tense, verb, applyFilter, resetApp, reset, setResetSelection }) => {
   const { theme } = useTheme();
   const { displayStart, setDisplayStart, setResetTenseSelection, setResetVerbSelection } = useSelectionStatus(
      setResetSelection,
      reset,
   );
   const { animatedStyles, actions } = useSelectionAnimation(setDisplayStart, reset);

   return (
      <View style={styles.root}>
         <Text style={styles.title}>Selection Container</Text>
         <View style={styles.container}>
            <View style={styles.innerContainer}>
               {/* body here */}
               <Pressable style={{ border: '1px solid black', padding: 10 }} onPress={resetApp}>
                  <Text style={{ fontSize: 18, fontWeight: 600 }}>Reset</Text>
               </Pressable>

               <Animated.View style={[styles.button, animatedStyles.tense, { backgroundColor: theme.primary }]}>
                  <GestureDetector gesture={actions.tense}>
                     <Animated.View style={[styles.testContainer, animatedStyles.tenseHeader]}>
                        <Text style={[styles.buttonText, { color: 'white' }]}>Select Tense</Text>
                     </Animated.View>
                  </GestureDetector>
                  <SelectTense
                     tense={tense}
                     displayStyle={animatedStyles.tenseDisplay}
                     applyFilter={applyFilter}
                     reset={reset}
                     setResetTenseSelection={setResetTenseSelection}
                  />
               </Animated.View>

               <Animated.View style={[styles.button, animatedStyles.verb, { backgroundColor: theme.secondary }]}>
                  <GestureDetector gesture={actions.verbs}>
                     <Animated.View style={[styles.testContainer, animatedStyles.verbHeader]}>
                        <Text style={styles.buttonText}>Select Verb</Text>
                     </Animated.View>
                  </GestureDetector>
                  <SelectVerb
                     verb={verb}
                     displayStyle={animatedStyles.verbDisplay}
                     applyFilter={applyFilter}
                     reset={reset}
                     setResetVerbSelection={setResetVerbSelection}
                  />
               </Animated.View>

               <Animated.View style={[styles.button, animatedStyles.start, { backgroundColor: theme.tertiary }]}>
                  <GestureDetector gesture={actions.start}>
                     <Animated.View style={[styles.testContainer, animatedStyles.startHeader]}>
                        <Text style={styles.buttonText}>Start</Text>
                     </Animated.View>
                  </GestureDetector>
                  <SelectCount
                     tense={tense}
                     verb={verb}
                     display={displayStart}
                     completeSelection={completeSelection}
                     displayStyle={animatedStyles.startDisplay}
                     reset={reset}
                  />
               </Animated.View>
            </View>
         </View>
      </View>
   );
};
export default SelectionContainer;

const styles = StyleSheet.create({
   root: { flex: 1, padding: 10 },
   title: { fontSize: 28, textAlign: 'center', fontWeight: '600', marginTop: 15, marginBottom: 20 },
   container: { flex: 1 },
   innerContainer: { flex: 1, zIndex: 1 },
   bodyText: { flex: 1, paddingLeft: 10, paddingRight: 10 },
   bodyTextItem: { marginBottom: 10, fontSize: 16 },
   button: {
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      // paddingTop: 30,
      // padding: 20,
      position: 'absolute',
      width: '100%',
      bottom: 0,
      alignItems: 'center',
      maxHeight: '100%',
      // transitionProperty: 'height',
      // transitionDuration: 200,
   },
   testContainer: { width: '100%', alignItems: 'center', justifyContent: 'center' },
   buttonText: { fontSize: 24, fontWeight: '600' },
});
