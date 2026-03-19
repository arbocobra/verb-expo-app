import { useTheme } from '@/app/ThemeContext';
import { useSelection } from '@/hooks/useSelection';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const SelectionContainer = ({ updateDisplay, tense, verb, applyFilter }) => {
   const { displayTense, displayVerb, submitState, submitSelection, updateSelection } = useSelection(updateDisplay);
   const { theme } = useTheme();

   const elementStyles = {
      container: [styles.container, submitState === 2 ? cStyles.hidden : cStyles.display],
      tenseButton: [
         styles.button,
         displayTense && cStyles.tenseUp,
         !displayTense && !displayVerb && cStyles.tenseDown,
         !displayTense && displayVerb && cStyles.tenseMid,
         submitState === 2 && cStyles.zeroHeight,
         { backgroundColor: theme.secondary },
      ],
      verbButton: [
         styles.button,
         displayVerb ? cStyles.verbUp : cStyles.verbDown,
         submitState === 2 ? cStyles.zeroHeight : null,
         { backgroundColor: theme.primary },
      ],
      startButton: [
         styles.button,
         submitState === 0 ? cStyles.startDown : submitState === 1 ? cStyles.startUp : cStyles.zeroHeight,
         { backgroundColor: theme.tertiary },
      ],
   };

   return (
      <View style={styles.root}>
         <Text style={styles.title}>Selection Container</Text>
         <View style={elementStyles.container}>
            <View style={styles.innerContainer}>
               <SelectionBody submitState={submitState} />
               <Animated.View style={elementStyles.tenseButton}>
                  <Pressable onPress={() => updateSelection('tense')}>
                     <Text style={styles.buttonText}>Tense Button</Text>
                  </Pressable>
               </Animated.View>
               <Animated.View style={elementStyles.verbButton}>
                  <Pressable onPress={() => updateSelection('verb')}>
                     <Text style={[styles.buttonText, { color: '#fff' }]}>Verb Button</Text>
                  </Pressable>
               </Animated.View>
               <Animated.View style={elementStyles.startButton}>
                  <Pressable>{submitState === 0 && <Text style={styles.buttonText}>Start Button</Text>}</Pressable>
               </Animated.View>
               {/* <Pressable style={elementStyles.startButton}>
                  {submitState === 0 && <Text style={styles.buttonText}>Start Button</Text>}
               </Pressable> */}
            </View>
         </View>
      </View>
   );
};

export default SelectionContainer;

const SelectionBody = ({ submitState }) => {
   const bodyText = [
      'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      'Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean.',
      'Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora.',
      'Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus.',
   ];

   return (
      <View style={[styles.bodyText, submitState === 2 ? cStyles.hidden : cStyles.display]}>
         {bodyText.map((el, i) => (
            <Text key={`body-text-${i}`} style={styles.bodyTextItem}>
               {el}
            </Text>
         ))}
      </View>
   );
};

const styles = StyleSheet.create({
   root: { flex: 1, padding: 20 },
   title: { fontSize: 28, textAlign: 'center', fontWeight: '600', marginTop: 15, marginBottom: 20 },
   container: { flex: 1 },
   innerContainer: { flex: 1, zIndex: 1 },
   bodyText: { flex: 1, paddingLeft: 10, paddingRight: 10 },
   bodyTextItem: { marginBottom: 10, fontSize: 16 },
   button: {
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      paddingTop: 30,
      padding: 20,
      position: 'absolute',
      width: '100%',
      bottom: 0,
      alignItems: 'center',
      transitionProperty: 'height',
      transitionDuration: 200,
   },
   buttonText: { fontSize: 24, fontWeight: '600' },
});

const cStyles = StyleSheet.create({
   hidden: { display: 'none' },
   display: { display: 'inherit' },
   tenseUp: { height: 675, zIndex: 1 },
   tenseMid: { height: 200, zIndex: 3 },
   tenseDown: { height: 300, zIndex: 1 },
   verbUp: { height: 675, zIndex: 2 },
   verbDown: { height: 200, zIndex: 2 },
   startUp: { height: 725, zIndex: 4 },
   startDown: { height: 100, zIndex: 4 },
   zeroHeight: { height: 0, padding: 0, overflow: 'hidden' },
});
